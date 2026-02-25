import Map "mo:core/Map";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";
import Nat8 "mo:core/Nat8";
import Array "mo:core/Array";
import Order "mo:core/Order";

actor {
  // Include prefabricated authorization system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User Profile Data Model
  public type UserProfile = {
    name : Text;
    email : ?Text;
    phoneNumber : ?Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // User Profile Management
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Sermon Data Model
  public type Sermon = {
    id : Nat8;
    title : Text;
    scriptureReference : Text;
    preacher : Text;
    sermonDate : Time.Time;
    audioUrl : ?Text;
    sermonText : Text;
  };

  // Internal ID counter and sermons storage
  var nextSermonId = 1 : Nat8;
  let sermons = Map.empty<Nat8, Sermon>();

  module Sermon {
    public func compare(sermon1 : Sermon, sermon2 : Sermon) : Order.Order {
      switch (Text.compare(sermon1.title, sermon2.title)) {
        case (#equal) { Nat8.compare(sermon1.id, sermon2.id) };
        case (order) { order };
      };
    };
  };

  // Persistent form submissions
  public type ContactSubmission = {
    name : Text;
    email : Text;
    message : Text;
    submittedAt : Time.Time;
  };

  let contactFormSubmissions = List.empty<ContactSubmission>();

  // Initialize with some demo data
  system func postupgrade() {
    let genesisSermon : Sermon = {
      id = nextSermonId;
      title = "In the Beginning: Creation in Genesis";
      scriptureReference = "Genesis 1:1-31";
      preacher = "Rev. John Doe";
      sermonDate = 1677648000000000000;
      audioUrl = ?"https://example.com/sermons/genesis.mp3";
      sermonText = "In this sermon, we explore the foundational truths found in Genesis chapter one...";
    };

    sermons.add(nextSermonId, genesisSermon);
    nextSermonId += 1;
  };

  // Sermon Management API (Admin)
  public shared ({ caller }) func addSermon(newSermon : Sermon) : async Nat8 {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add sermons");
    };

    let sermonWithId = { newSermon with id = nextSermonId };
    sermons.add(nextSermonId, sermonWithId);

    nextSermonId += 1;
    sermonWithId.id;
  };

  public shared ({ caller }) func updateSermon(updatedSermon : Sermon) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update sermons");
    };

    if (not sermons.containsKey(updatedSermon.id)) {
      Runtime.trap("Sermon does not exist");
    };

    sermons.add(updatedSermon.id, updatedSermon);
  };

  // Sermon Retrieval API (Public - accessible to all including guests)
  public query func getAllSermons() : async [Sermon] {
    sermons.values().toArray().sort();
  };

  public query func getSermonById(id : Nat8) : async ?Sermon {
    sermons.get(id);
  };

  // Contact Form Handling (Public submission - accessible to all including guests)
  public shared func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let newSubmission : ContactSubmission = {
      name;
      email;
      message;
      submittedAt = Time.now();
    };

    contactFormSubmissions.add(newSubmission);
  };

  public query ({ caller }) func getContactFormSubmissions() : async [ContactSubmission] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view submissions");
    };

    contactFormSubmissions.values().toArray();
  };

  // Location & Service Info (Public - accessible to all including guests)
  public query func getServiceInfo() : async {
    address : Text;
    serviceTimes : Text;
    mapUrl : Text;
  } {
    {
      address = "Kothrud, Pune, Maharashtra";
      serviceTimes = "Sunday Worship 10:30 AM | Bible Study 7:00 PM Wednesdays";
      mapUrl = "https://maps.openstreetmap.org/?mlat=18.5088&mlon=73.8077&zoom=12";
    };
  };
};
