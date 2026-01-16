
const CompaniesSection = () => {
  const companies = [
    { name: "Google", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png" },
    { name: "Microsoft", logo: "https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png" },
    { name: "Apple", logo: "https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png" },
    { name: "Amazon", logo: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" },
    { name: "Meta", logo: "https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png" },
    { name: "Netflix", logo: "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" }
  ];

  return (
    <section className="py-16 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Companies We <span className="text-primary">Partner With</span>
          </h2>
          <p className="text-muted-foreground">
            Building connections with industry leaders
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity">
          {companies.map((company, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto filter brightness-0 invert hover:brightness-100 hover:invert-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
