import {
  ArrowUpRight,
  Django,
  Pipefy,
  Rackspace,
  Teamwork,
} from "../../../public/icons";

const ClientSection = () => {
  const clients = [
    {
      name: "Teamwork.inc",
      date: "May 5, 2023",
      logo: Teamwork,
    },
    {
      name: "Django",
      date: "May 5, 2023",
      logo: Django,
    },
    {
      name: "Pipefy.io",
      date: "May 5, 2023",
      logo: Pipefy,
    },
    {
      name: "Rackspace",
      date: "May 5, 2023",
      logo: Rackspace,
    },
  ];

  return (
    <div className="w-full px-4 py-6 mx-auto md:max-w-4xl md:p-8">
      <h1 className="mb-6 text-[22px] text-gray-900 font-semibold font-inter-tight md:text-2xl md:mb-8">
        Clients
      </h1>

      <div className="space-y-3 md:space-y-4">
        {clients.map((client) => (
          <div
            key={client.name}
            className="flex items-center justify-between py-3 transition-colors border-t border-gray-100 font-inter-tight group hover:bg-gray-50 md:py-4"
          >
            <div className="space-y-0.5 md:space-y-1">
              <h2 className="text-base font-medium md:text-lg">
                {client.name}
              </h2>
              <p className="text-xs text-gray-500 md:text-sm">{client.date}</p>
            </div>

            <div className="flex items-center gap-2">
              <img
                src={client.logo}
                alt={client.name}
                className="w-auto h-8 grayscale" // Added grayscale for the gray logos shown in image
              />
              <button
                className="p-2 transition-colors hover:text-gray-600"
                aria-label={`View ${client.name} details`}
              >
                <img src={ArrowUpRight} alt="Icon Up Right" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
