import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Sermon {
    id: number;
    preacher: string;
    title: string;
    audioUrl?: string;
    sermonDate: Time;
    sermonText: string;
    scriptureReference: string;
}
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    submittedAt: Time;
    email: string;
    message: string;
}
export interface UserProfile {
    name: string;
    email?: string;
    phoneNumber?: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addSermon(newSermon: Sermon): Promise<number>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllSermons(): Promise<Array<Sermon>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getContactFormSubmissions(): Promise<Array<ContactSubmission>>;
    getSermonById(id: number): Promise<Sermon | null>;
    getServiceInfo(): Promise<{
        address: string;
        mapUrl: string;
        serviceTimes: string;
    }>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    updateSermon(updatedSermon: Sermon): Promise<void>;
}
