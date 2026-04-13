const STATE_DATA = {
  "alabama": { abbr:"AL", name:"Alabama", capital:"Montgomery", agency:"Alabama Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all new and used auto dealers licensed in Alabama."},
    {name:"Contractor License Bond", amount:"$10,000-$50,000", desc:"Required for general contractors and specialty trades depending on project size."},
    {name:"Notary Public Bond", amount:"$25,000", desc:"Required for all commissioned notaries in the state."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Required by FMCSA for freight brokers operating in Alabama."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and lenders licensed in Alabama."}
  ]},
  "alaska": { abbr:"AK", name:"Alaska", capital:"Juneau", agency:"Alaska Division of Insurance", bonds:[
    {name:"Contractor License Bond", amount:"$25,000", desc:"Required for general contractors performing work in Alaska."},
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for auto dealers operating in the state."},
    {name:"Notary Public Bond", amount:"$2,500", desc:"Required for all notaries public in Alaska."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Required by FMCSA for freight brokers operating in Alaska."},
    {name:"Liquor License Bond", amount:"$5,000", desc:"Required for establishments selling alcoholic beverages."}
  ]},
  "arizona": { abbr:"AZ", name:"Arizona", capital:"Phoenix", agency:"Arizona Department of Insurance and Financial Institutions", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$100,000", desc:"Required for all motor vehicle dealers licensed in Arizona."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Arizona Registrar of Contractors for licensed contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all commissioned notaries in Arizona."},
    {name:"Mortgage Broker Bond", amount:"$10,000-$25,000", desc:"Required for mortgage brokers and bankers in Arizona."},
    {name:"Collection Agency Bond", amount:"$15,000", desc:"Required for debt collection agencies operating in Arizona."}
  ]},
  "arkansas": { abbr:"AR", name:"Arkansas", capital:"Little Rock", agency:"Arkansas Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed auto dealers in Arkansas."},
    {name:"Contractor License Bond", amount:"$10,000-$20,000", desc:"Required for contractors performing work in Arkansas."},
    {name:"Notary Public Bond", amount:"$7,500", desc:"Required for all notaries public in Arkansas."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers operating in Arkansas."},
    {name:"Tax Preparer Bond", amount:"$50,000", desc:"Required for paid tax preparers in the state."}
  ]},
  "california": { abbr:"CA", name:"California", capital:"Sacramento", agency:"California Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required by the DMV for all licensed auto dealers in California."},
    {name:"Contractor License Bond", amount:"$25,000", desc:"Required by the CSLB for all licensed contractors."},
    {name:"Notary Public Bond", amount:"$15,000", desc:"Required for all California notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000-$50,000", desc:"Required for mortgage brokers licensed under the DBO."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Required by FMCSA for freight brokers operating in California."}
  ]},
  "colorado": { abbr:"CO", name:"Colorado", capital:"Denver", agency:"Colorado Division of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for auto dealers licensed in Colorado."},
    {name:"Contractor License Bond", amount:"Varies by municipality", desc:"Required by local jurisdictions for licensed contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Not required statewide but may be required by employers."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage companies in Colorado."},
    {name:"Collection Agency Bond", amount:"$20,000", desc:"Required for debt collectors operating in Colorado."}
  ]},
  "connecticut": { abbr:"CT", name:"Connecticut", capital:"Hartford", agency:"Connecticut Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed auto dealers in Connecticut."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for contractors in certain trades and municipalities."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for commissioned notaries in Connecticut."},
    {name:"Mortgage Broker Bond", amount:"$40,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Connecticut."}
  ]},
  "delaware": { abbr:"DE", name:"Delaware", capital:"Dover", agency:"Delaware Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for licensed auto dealers in Delaware."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all notaries public in Delaware."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for licensed mortgage brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Delaware."}
  ]},
  "florida": { abbr:"FL", name:"Florida", capital:"Tallahassee", agency:"Florida Office of Insurance Regulation", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Florida."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for certified and registered contractors."},
    {name:"Notary Public Bond", amount:"$7,500", desc:"Required for all Florida notaries public."},
    {name:"Mortgage Broker Bond", amount:"$10,000-$25,000", desc:"Required for mortgage brokers licensed in Florida."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Florida."}
  ]},
  "georgia": { abbr:"GA", name:"Georgia", capital:"Atlanta", agency:"Georgia Office of Insurance and Safety Fire Commissioner", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$35,000", desc:"Required for used and new motor vehicle dealers in Georgia."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions and the state for certain trades."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all commissioned notaries in Georgia."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for debt collection agencies in Georgia."}
  ]},
  "hawaii": { abbr:"HI", name:"Hawaii", capital:"Honolulu", agency:"Hawaii Department of Commerce and Consumer Affairs", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed auto dealers in Hawaii."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Contractors License Board."},
    {name:"Notary Public Bond", amount:"$1,000", desc:"Required for all notaries public in Hawaii."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage servicers and brokers."},
    {name:"Collection Agency Bond", amount:"$25,000", desc:"Required for collection agencies operating in Hawaii."}
  ]},
  "idaho": { abbr:"ID", name:"Idaho", capital:"Boise", agency:"Idaho Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$40,000", desc:"Required for all motor vehicle dealers in Idaho."},
    {name:"Contractor License Bond", amount:"$2,000-$30,000", desc:"Required for public works contractors in Idaho."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all notaries public in Idaho."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage broker-lenders."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Idaho."}
  ]},
  "illinois": { abbr:"IL", name:"Illinois", capital:"Springfield", agency:"Illinois Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed auto dealers in Illinois."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local municipalities for roofing, plumbing, electrical."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all Illinois notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000-$100,000", desc:"Required for residential mortgage licensees."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Illinois."}
  ]},
  "indiana": { abbr:"IN", name:"Indiana", capital:"Indianapolis", agency:"Indiana Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Indiana."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for certain trades."},
    {name:"Notary Public Bond", amount:"$25,000", desc:"Required for all notaries public in Indiana."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for first lien mortgage lending licensees."},
    {name:"Collection Agency Bond", amount:"$25,000", desc:"Required for debt collection agencies in Indiana."}
  ]},
  "iowa": { abbr:"IA", name:"Iowa", capital:"Des Moines", agency:"Iowa Insurance Division", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$75,000", desc:"Required for all licensed motor vehicle dealers in Iowa."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for licensed contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all Iowa notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage bankers and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Iowa."}
  ]},
  "kansas": { abbr:"KS", name:"Kansas", capital:"Topeka", agency:"Kansas Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$30,000", desc:"Required for all licensed motor vehicle dealers in Kansas."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for contractors."},
    {name:"Notary Public Bond", amount:"$7,500", desc:"Required for all notaries public in Kansas."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage companies in Kansas."},
    {name:"Collection Agency Bond", amount:"$5,000", desc:"Required for debt collection agencies in Kansas."}
  ]},
  "kentucky": { abbr:"KY", name:"Kentucky", capital:"Frankfort", agency:"Kentucky Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all motor vehicle dealers in Kentucky."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for certain trades."},
    {name:"Notary Public Bond", amount:"$1,000", desc:"Required for all Kentucky notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage loan companies and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Kentucky."}
  ]},
  "louisiana": { abbr:"LA", name:"Louisiana", capital:"Baton Rouge", agency:"Louisiana Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all used and new motor vehicle dealers in Louisiana."},
    {name:"Contractor License Bond", amount:"$5,000-$15,000", desc:"Required for licensed contractors by the LSLBC."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all notaries in Louisiana parishes."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for residential mortgage lending licensees."},
    {name:"Collection Agency Bond", amount:"$20,000", desc:"Required for debt collection agencies in Louisiana."}
  ]},
  "maine": { abbr:"ME", name:"Maine", capital:"Augusta", agency:"Maine Bureau of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed auto dealers in Maine."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required by local municipalities."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Maine notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for supervised lenders and mortgage brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Maine."}
  ]},
  "maryland": { abbr:"MD", name:"Maryland", capital:"Annapolis", agency:"Maryland Insurance Administration", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Maryland."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the MHIC for home improvement contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Maryland notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000-$150,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$5,000", desc:"Required for collection agencies operating in Maryland."}
  ]},
  "massachusetts": { abbr:"MA", name:"Massachusetts", capital:"Boston", agency:"Massachusetts Division of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed auto dealers in Massachusetts."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required for public construction projects."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Not required but recommended for Massachusetts notaries."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Massachusetts."}
  ]},
  "michigan": { abbr:"MI", name:"Michigan", capital:"Lansing", agency:"Michigan Department of Insurance and Financial Services", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Michigan."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for residential builders."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Michigan notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for first mortgage brokers and lenders."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for licensed collection agencies in Michigan."}
  ]},
  "minnesota": { abbr:"MN", name:"Minnesota", capital:"Saint Paul", agency:"Minnesota Department of Commerce", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Minnesota."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for residential building contractors and roofers."},
    {name:"Notary Public Bond", amount:"$12,000", desc:"Required for all Minnesota notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for residential mortgage originators."},
    {name:"Collection Agency Bond", amount:"$20,000", desc:"Required for collection agencies in Minnesota."}
  ]},
  "mississippi": { abbr:"MS", name:"Mississippi", capital:"Jackson", agency:"Mississippi Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all motor vehicle dealers in Mississippi."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Mississippi State Board of Contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all Mississippi notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Mississippi."}
  ]},
  "missouri": { abbr:"MO", name:"Missouri", capital:"Jefferson City", agency:"Missouri Department of Commerce and Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Missouri."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local municipalities for certain trades."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Missouri notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000-$100,000", desc:"Required for residential mortgage loan brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for debt collection agencies in Missouri."}
  ]},
  "montana": { abbr:"MT", name:"Montana", capital:"Helena", agency:"Montana Commissioner of Securities and Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all motor vehicle dealers in Montana."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required by local jurisdictions."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Montana notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Montana."}
  ]},
  "nebraska": { abbr:"NE", name:"Nebraska", capital:"Lincoln", agency:"Nebraska Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Nebraska."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for contractors."},
    {name:"Notary Public Bond", amount:"$15,000", desc:"Required for all Nebraska notaries public."},
    {name:"Mortgage Broker Bond", amount:"$100,000", desc:"Required for mortgage bankers and installment loan companies."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Nebraska."}
  ]},
  "nevada": { abbr:"NV", name:"Nevada", capital:"Carson City", agency:"Nevada Division of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$100,000", desc:"Required for all licensed motor vehicle dealers in Nevada."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Nevada State Contractors Board."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Nevada notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and agents."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Nevada."}
  ]},
  "new-hampshire": { abbr:"NH", name:"New Hampshire", capital:"Concord", agency:"New Hampshire Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in New Hampshire."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required by local municipalities."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Not required but may be required by employers."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage bankers and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in New Hampshire."}
  ]},
  "new-jersey": { abbr:"NJ", name:"New Jersey", capital:"Trenton", agency:"New Jersey Department of Banking and Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$10,000", desc:"Required for all licensed motor vehicle dealers in New Jersey."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the NJ Division of Consumer Affairs for home improvement."},
    {name:"Notary Public Bond", amount:"$2,500", desc:"Required for all New Jersey notaries public."},
    {name:"Mortgage Broker Bond", amount:"$100,000", desc:"Required for residential mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for debt collection agencies in New Jersey."}
  ]},
  "new-mexico": { abbr:"NM", name:"New Mexico", capital:"Santa Fe", agency:"New Mexico Office of Superintendent of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all motor vehicle dealers in New Mexico."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the NM Construction Industries Division."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all New Mexico notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage loan originators."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in New Mexico."}
  ]},
  "new-york": { abbr:"NY", name:"New York", capital:"Albany", agency:"New York Department of Financial Services", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$20,000", desc:"Required for all licensed motor vehicle dealers in New York."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by NYC and other local jurisdictions."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Not required for NY notaries but recommended."},
    {name:"Mortgage Broker Bond", amount:"$10,000-$50,000", desc:"Required for mortgage bankers and brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for debt collection agencies in New York."}
  ]},
  "north-carolina": { abbr:"NC", name:"North Carolina", capital:"Raleigh", agency:"North Carolina Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in North Carolina."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the NC Licensing Board for General Contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all North Carolina notaries public."},
    {name:"Mortgage Broker Bond", amount:"$150,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in North Carolina."}
  ]},
  "north-dakota": { abbr:"ND", name:"North Dakota", capital:"Bismarck", agency:"North Dakota Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all motor vehicle dealers in North Dakota."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for contractors performing public works."},
    {name:"Notary Public Bond", amount:"$7,500", desc:"Required for all North Dakota notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for money brokers and mortgage lenders."},
    {name:"Collection Agency Bond", amount:"$20,000", desc:"Required for collection agencies in North Dakota."}
  ]},
  "ohio": { abbr:"OH", name:"Ohio", capital:"Columbus", agency:"Ohio Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Ohio."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions for specialty trades."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Ohio notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and loan originators."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Ohio."}
  ]},
  "oklahoma": { abbr:"OK", name:"Oklahoma", capital:"Oklahoma City", agency:"Oklahoma Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Oklahoma."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for certain trades by the Oklahoma Construction Industries Board."},
    {name:"Notary Public Bond", amount:"$1,000", desc:"Required for all Oklahoma notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and loan originators."},
    {name:"Collection Agency Bond", amount:"$5,000", desc:"Required for debt collection agencies in Oklahoma."}
  ]},
  "oregon": { abbr:"OR", name:"Oregon", capital:"Salem", agency:"Oregon Division of Financial Regulation", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Oregon."},
    {name:"Contractor License Bond", amount:"$20,000-$75,000", desc:"Required by the Oregon CCB for all licensed contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Oregon notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and bankers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Oregon."}
  ]},
  "pennsylvania": { abbr:"PA", name:"Pennsylvania", capital:"Harrisburg", agency:"Pennsylvania Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$20,000", desc:"Required for all licensed motor vehicle dealers in Pennsylvania."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions like Philadelphia for home improvement."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Pennsylvania notaries public."},
    {name:"Mortgage Broker Bond", amount:"$100,000", desc:"Required for mortgage licensees in Pennsylvania."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Pennsylvania."}
  ]},
  "rhode-island": { abbr:"RI", name:"Rhode Island", capital:"Providence", agency:"Rhode Island Department of Business Regulation", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Rhode Island."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required for contractors registered with the Contractors Registration Board."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Rhode Island notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for mortgage brokers and loan originators."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Rhode Island."}
  ]},
  "south-carolina": { abbr:"SC", name:"South Carolina", capital:"Columbia", agency:"South Carolina Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$30,000", desc:"Required for all motor vehicle dealers in South Carolina."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the SC Contractors Licensing Board."},
    {name:"Notary Public Bond", amount:"$1,000", desc:"Required for all South Carolina notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in South Carolina."}
  ]},
  "south-dakota": { abbr:"SD", name:"South Dakota", capital:"Pierre", agency:"South Dakota Division of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in South Dakota."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required for public works contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all South Dakota notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$15,000", desc:"Required for debt collection agencies in South Dakota."}
  ]},
  "tennessee": { abbr:"TN", name:"Tennessee", capital:"Nashville", agency:"Tennessee Department of Commerce and Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Tennessee."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the TN Board for Licensing Contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Tennessee notaries public."},
    {name:"Mortgage Broker Bond", amount:"$200,000", desc:"Required for mortgage lenders and brokers in Tennessee."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Tennessee."}
  ]},
  "texas": { abbr:"TX", name:"Texas", capital:"Austin", agency:"Texas Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required by TxDMV for all licensed motor vehicle dealers in Texas."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by local jurisdictions such as Houston, Dallas, and Austin."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Texas notaries public."},
    {name:"Mortgage Broker Bond", amount:"$50,000", desc:"Required for residential mortgage loan servicers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Texas."}
  ]},
  "utah": { abbr:"UT", name:"Utah", capital:"Salt Lake City", agency:"Utah Insurance Department", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$75,000", desc:"Required for all licensed motor vehicle dealers in Utah."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Utah Division of Occupational and Professional Licensing."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all Utah notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Utah."}
  ]},
  "vermont": { abbr:"VT", name:"Vermont", capital:"Montpelier", agency:"Vermont Department of Financial Regulation", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$35,000", desc:"Required for all motor vehicle dealers in Vermont."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required for residential construction."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Vermont notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Vermont."}
  ]},
  "virginia": { abbr:"VA", name:"Virginia", capital:"Richmond", agency:"Virginia Bureau of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$50,000", desc:"Required for all licensed motor vehicle dealers in Virginia."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Virginia Board for Contractors."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Virginia notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for debt collection agencies in Virginia."}
  ]},
  "washington": { abbr:"WA", name:"Washington", capital:"Olympia", agency:"Washington Office of the Insurance Commissioner", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$30,000", desc:"Required for all licensed motor vehicle dealers in Washington."},
    {name:"Contractor License Bond", amount:"$12,000-$30,000", desc:"Required by the WA Department of Labor and Industries."},
    {name:"Notary Public Bond", amount:"$10,000", desc:"Required for all Washington notaries public."},
    {name:"Mortgage Broker Bond", amount:"$30,000-$60,000", desc:"Required for consumer loan companies and mortgage brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Washington."}
  ]},
  "west-virginia": { abbr:"WV", name:"West Virginia", capital:"Charleston", agency:"West Virginia Offices of the Insurance Commissioner", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in West Virginia."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the WV Division of Labor for licensed contractors."},
    {name:"Notary Public Bond", amount:"$5,000", desc:"Required for all West Virginia notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage brokers and lenders."},
    {name:"Collection Agency Bond", amount:"$5,000", desc:"Required for collection agencies in West Virginia."}
  ]},
  "wisconsin": { abbr:"WI", name:"Wisconsin", capital:"Madison", agency:"Wisconsin Office of the Commissioner of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all licensed motor vehicle dealers in Wisconsin."},
    {name:"Contractor License Bond", amount:"Varies", desc:"Required by the Wisconsin DSPS for certain trades."},
    {name:"Notary Public Bond", amount:"$500", desc:"Required for all Wisconsin notaries public."},
    {name:"Mortgage Broker Bond", amount:"$120,000", desc:"Required for mortgage bankers and brokers."},
    {name:"Freight Broker Bond", amount:"$75,000", desc:"Federal requirement for freight brokers in Wisconsin."}
  ]},
  "wyoming": { abbr:"WY", name:"Wyoming", capital:"Cheyenne", agency:"Wyoming Department of Insurance", bonds:[
    {name:"Motor Vehicle Dealer Bond", amount:"$25,000", desc:"Required for all motor vehicle dealers in Wyoming."},
    {name:"Contractor License Bond", amount:"Varies", desc:"May be required by local jurisdictions."},
    {name:"Notary Public Bond", amount:"$500", desc:"Required for all Wyoming notaries public."},
    {name:"Mortgage Broker Bond", amount:"$25,000", desc:"Required for mortgage lenders and brokers."},
    {name:"Collection Agency Bond", amount:"$10,000", desc:"Required for collection agencies in Wyoming."}
  ]}
};