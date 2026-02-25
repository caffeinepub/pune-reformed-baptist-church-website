import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'pune-reformed-baptist';

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-3">Pune Reformed Baptist Church</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A confessional Reformed Baptist congregation holding to the 1689 London Baptist Confession of Faith.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-3">Service Times</h4>
            <p className="text-sm text-muted-foreground">
              Sunday Worship: 10:30 AM<br />
              Bible Study: 7:00 PM Wednesdays
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-sm mb-3">Location</h4>
            <p className="text-sm text-muted-foreground">
              Kothrud, Pune<br />
              Maharashtra, India
            </p>
          </div>
        </div>
        
        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1.5">
            © {currentYear} Pune Reformed Baptist Church. Built with{' '}
            <Heart className="w-4 h-4 text-primary fill-primary" aria-label="love" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
