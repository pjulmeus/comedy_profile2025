interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">{title}</h1>
        <div className="flex flex-col items-center w-full">
          {children}
        </div>
      </div>
    </div>
  );
}