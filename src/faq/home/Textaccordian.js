import { useState } from "react";

import { FaMinus, FaPlus } from "react-icons/fa";

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);

  return (
    <div className={`transition  text-white  `} onClick={toggleExpanded}>
      <div className="accordion-header text-xl  cursor-pointer transition flex space-x-5 px-5 items-center h-20 sech select-none">
        {expanded ? (
          <FaMinus className="text-white" />
        ) : (
          <FaPlus className="text-white" />
        )}
        <h3>{title}</h3>
      </div>
      <div
        className={`px-5 pt-0 overflow-hidden transition ${
          expanded ? "max-h-fit" : "max-h-0"
        }`}
      >
        <p className="leading-6 font-light pl-9 pb-4 text-justify">{content}</p>
      </div>
    </div>
  );
}

export default function Textaccordian() {
  return (
    <div className=" h-auto bg-gradient-to-br bg-black grid place-items-center">
      <div className="w-7/12 mx-auto aco ">
        <div className="bg-[#323e3f] shadow-sm">
          <Accordion
            title="    How do I contact Peter Posh? "
            content="Other than visiting the showroom you may call or email, the details are as follows;

 

Telford – 01952 201117 –

telford@peterposh.co.uk"
          />
        </div>

        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="Do I need to make an appointment?"
            content="When visiting us, we would prefer and recommend an appointment due to demand being high, this means we can expect your visit and dedicate time to your order. Saturdays are naturally our busiest and most popular day."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="How long in advance should I book and when do we all have to come to be fitted? "
            content="Initially, we recommend just couples themselves visit our showrooms at the early stages (maybe bring the best man too!). They try on their ideas regarding suit hire, colours etc and discuss what they would like everyone to wear, closer to the time (6-8 weeks prior to event) we would then see the rest of the party to be fitted for their hire suits. For boys it is recommended that they are fitted 2-3 weeks before the wedding due to growth.

Dinner suit and single orders may be organised a lot sooner to the function date. It is strongly advised to be fitted (at least a week) before the function date so that the outfit can be delivered to the relevant showroom, suits ‘to go’ are possible but please enquire regarding size availability at short notice (a form of identification is required also)."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion title="What is the initial payment? "
           content="A deposit per outfit is required at the time of booking to secure the availability of your outfit, the remaining balance can then be paid upon collection or before if you prefer.

Payments can be made by cash or card. We accept all debit cards and most major credit cards (except American Express.)" />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      Do I have to leave a security deposit?                    "
            content="We reserve the right to ask for a suitable form of identification and security deposit when hiring any items from Peter Posh. Please call for further details."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                      How much does a suit cost?                     "
            content="All items are individually priced, please refer to our printed showroom price list (or call to enquire) for the costing of each suit along with extra items such as shirts, waistcoats, shoes (to buy only), self-tie cravats, ties etc."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      
            When can I collect the suits?                                      "
            content="We aim to have outfits ready to collect from 2pm, 2 days prior to the function date based on a Friday or Saturday function. Sunday functions will be available from the Thursday for collection. Collection dates can be arranged for alternative days, please ask a staff member for further details."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                       
                      When do I return the suits?                                   "
            content="The suits are required back on the next working day, typically by 10am."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      Can I book my outfit in one showroom and collect from another?                    
                                        "
            content="Yes, please instruct the showroom where the suit is booked, our staff member will then organise the delivery to the showroom of you choice. This can only be arranged within our seven showrooms in Telford, Shrewsbury, Tettenhall, Birmingham, Warwick, Knutsford and Cheltenham."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                      Can members of my wedding party be measured at another showroom?                    
                                       "
            content="Yes, please provide the measuring showroom (Telford, Shrewsbury, Tettenhall, Birmingham, Warwick, Knutsford and Cheltenham) with the party name, date of the wedding and the showroom the order was originally placed at, so that the order can be located."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      One/some of the gents in the wedding party are not local to any of the showrooms, what can I do?                    
                                      "
            content="Please contact one of our showrooms to discuss in detail.

Customers own measurements can be provided by yourselves, please speak to the showroom where the order was originally placed to discuss what specific sizes we require for your order. Please note Peter Posh cannot be held responsible for ill fitting garments provided in this way.

We also supply Independent retail shops all over the UK, if you provide us with a postcode we will be more than happy to provide a local stockist nearby for you to contact, this individuals outfit, delivery, return and outfit payments would all be done through this stockist and would be completely separate from any orders placed with any of the seven Peter Posh showrooms."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                      Can I return my outfit(s) to another showroom?                    
                                      "
            content="If you have hired an outfit from any of our seven showrooms in Telford, Shrewsbury, Tettenhall, Birmingham, Warwick, Knutsford or Cheltenham, then you can also return it to any of them as well."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                                   
                      I need my suit for a longer period of time/am flying abroad, is this possible?                       "
            content="Certainly, extended hire can be arranged, please speak to a staff member about your requirements, duration and they will be happy to work out costing."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                            
                      What age does boys wear start from?                              "
            content="Our boy’s outfits measure in inches, so sizes start at around 2 – 3 years old depending on the young mans size. Jackets start at a 20 inch chest, trousers 18 inch waist, 22 inch for waistcoats and 10 ½ inch collar for shirts."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                           
                      What are the biggest sizes available?                               "
            content="In the majority of styles 58 inch chest is the largest, with some styles going up to a 60 inch chest.

Most of our trouser ranges goes up to a 58 inch waist.

Most waistcoats are available up to a 58 inch chest, with the newer styles now available in a 60 inch chest.

The largest collar size is 21 inches."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                       
                      What is the size range of your top hats?                                   "
            content="Top hats are available in grey, black and navy and size from 6 ½ (53cm) to 7 7/8 (64cm.)

They are also available in boys in small (49cm), medium (50cm) and large (51cm.)"
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                       
                      Can I purchase ex-hire wear?                                   "
            content="Some ex-hirewear items that are now excluded from our hire range are available to purchase. Please be aware this may be because the item is imperfect in some way (a small snag/pull etc) Please contact one of our showrooms for further information and availability of styles/sizes."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                                   
                      I want to buy my suit/outfit NEW, can I?                       "
            content="On the majority of suits yes, please enquire with a staff member on other items. This also enables us to discuss availability, costing and date requirements on all items."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                                
                      Do you hire dinner suits for boys?                          "
            content="Yes, boys dinner suit jackets start at a 20 inch chest with boys bow-ties available in black only."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                      Can I get colour samples of the actual cravat/tie fabric in your range?                    
                                      "
            content="Yes, these are available when you visit one of our seven showrooms to make an enquiry."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      Do you offer accidental damage insurance (ADW) on outfits?                    
                                      "
            content="Yes, accidental damage waiver is optional with Peter Posh and can be added to each individuals outfit for only £4.95 upon request. This covers the wearer against accidental damage that might arise through the appropriate wear of the outfit, please note this does not cover for malicious damage, loss and does not cover Tophat hire. For a full list of what ADW covers please contact one of our showrooms."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                          
                      Are the Peter Posh Showrooms open on Bank Holidays?                                "
            content="Our showrooms are closed on Bank Holiday Mondays. Good Friday is a normal day of trading."
          />
        </div>
        <div className="bg-[#323e3f] shadow-sm ">
          <Accordion
            title="
                      Do you hire shoes?                    
                                      "
            content="We do not hire shoes.

 

We do however sell new shoes in our seven showrooms at a very reasonable price for both men and boys."
          />
        </div>
        <div className="bg-[#000] shadow-sm ">
          <Accordion
            title="
                            
                      Do you make suits?                              "
            content="We can indeed make a personalised suit for you from our cloths available in our seven showrooms, please see our Personal Tailoring section for further details."
          />
        </div>
      </div>
    </div>
  );
}
