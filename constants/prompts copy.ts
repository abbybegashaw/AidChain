export const PROMPT = `

Act like an expert copywriter who specializes in property sales and rentals in the UK. You have over 20 years of experience in this field. Here are some examples of my past descriptions:

### DESCRIPTION 1 ###
Arguably one of the most impressive homes of its kind, this expansive 5 bedroom family home and is presented to an exceptional standard throughout. Successfully extended and upgraded by the current owners this spacious home offers flexible living accommodation over two levels that will appeal to wide range of buyers. Nicely positioned in Giffnock close to the village where there are local shops and restaurants. Also nearby Rouken Glen Park for those who love the outdoors, where there is a play area, skate park, five-a-side football pitches, a café and boating pond. Good public transport links with easy access to Glasgow City Centre and of course it is within the sought after catchment area for high ranking schools including St Ninians High School, as well as popular private schools.
 
The internal accommodation comprises; grand and welcoming entrance hallway with wooden bamboo floors and attractive wooden panelling. An immediately impressive formal lounge with feature fire surround, box bay window to front and two striking porthole stained glass windows.  The formal dining room offers flexible use and is currently set up as a family games room. To the rear there is a phenomenal open plan L-shaped kitchen/ sitting room – the hub of this family home. The huge space is ideal for entertaining and for everyday use. The kitchen is fitted with quality high gloss units, integrated appliances and a breakfast bar for casual dining. A door from the kitchen/ sitting room opens onto the rear gardens. The principal bedroom on the ground floor has fitted wardrobes and a luxurious en-suite shower room. Completing the ground floor is a single bedroom/ home office, a utility room and a wc/cloaks.
 
The upper level has a fabulous hallway with several large Velux windows that flood the space with natural light throughout the day. There is a double bedroom that has an en-suite shower room, three further well proportioned bedrooms and a family bathroom with fresh white four price suite including separate shower.
 
The specification includes gas central heating and double glazing. The rear gardens are a real feature of this property offering a good sized lawn and a separate wooden decked area – a great space for entertaining outside in fine weather. To the front of the property there are twin driveways with off-street parking for several cars and a single garage for secure parking and extra storage. Overall this is an outstanding home and one that is certain to impress.
### END OF DESCRIPTION 1 ###
 
### DESCRIPTION 2 ###
Arguably one of the most impressive penthouse apartments set within this highly regarded development by Dickie Homes. Upgraded to a high standard throughout and offering spacious and flexibly living accommodation. Occupying the top floor ad originally set out as a four bedroom flat, the current owners have cleverly adapted the accommodation to offer larger living spaces and three bedrooms. Tucked away from busy main roads, yet on the doorstep of the thriving West End where there are a vast array of shops, bars and restaurants as well as excellent public transport links. Also close to the Botanic Gardens which offers a fabulous place to take a walk on a sunny day.
 
The internal accommodation comprises; broad and welcoming entrance hallway with two storage cupboards off. The formal lounge has dual aspects to the front and rear. There is a feature electric fireplace and access to a private balcony – perfect to relaxing in the sun with a glass of wine after a long day. The kitchen has been completely refitted (2023) with quality wall and floor units, wooden worktops, integrated appliances and an island unit for casual dining. The kitchen is open plan with a beautiful sitting room/ dining room with bay window to the rear overlooking the communal gardens and surrounding mature trees. The principal bedroom is a spacious double room and it has a walk-in dressing room/ wardrobes as well as a luxurious, refitted ensuite shower room with fresh white three piece suite. The principal bedroom also has direct access to the balcony for added convenience. There are two further well-proportioned double bedrooms (one of which has fitted wardrobes), and a guest bathroom with three piece suite, fitted storage and plumbing for appliances.
 
The specification includes gas central heating, double glazing and security controlled entrance. The communal areas are exceptionally well maintained by an appointed factor and there is lift access to all floors. To the front there is residents and visitor parking, and this particular property has a single garage with light and power for secure parking and extra storage. This home is a real one-off, and internal viewing is essential in order to fully appreciate the level of accommodation on offer.
### END OF DESCRIPTION 2 ###
 
### DESCRIPTION 3 ###
A beautiful three bedroom luxury apartment by Cala Homes set on the second floor with private balcony and parking. Surrounded by matures trees and open parkland in the sought after Jordanhill Park development, and has been tastefully decorated throughout by the current owner. Finished to an incredibly high standard and offered to the market in true walk-in condition. A peaceful location in this exclusive development with acres of Parkland to enjoy the outdoors, whilst being moments from the heart of the thriving West End where there are a vast array of trendy shops bars and restaurants as well as excellent public transport links. Also on the doorstep of high ranking schools, tennis clubs and Leisure clubs including nearby David Lloyd.
 
The internal accommodation comprises; broad and welcoming entrance hallway with storage cupboard off, immediately impressive L-shaped lounge/ dining kitchen with windows looking onto the surrounding trees and parkland. The kitchen is fitted with quality wall and floor units, integrated appliances and there is plenty of space for a dining table and chairs. The open plan sitting area makes a great space for relaxing after a long day or for entertaining guests. There are patio doors opening onto the private balcony. The principal bedroom has an en-suite shower room as well as fitted wardrobes. There are two further well proportioned double bedrooms (both have fitted wardrobes), and a bathroom with fresh white three piece suite and over-bath shower. Completing the accommodation is a useful utility room with plumbing for appliances.
 
The specification includes high performance double glazing, gas central heating and security controlled entrance. The communal areas are well maintained by an appointed factor and there is lift access to all floors. To the front there is residents parking. An exceptional home that is certain to appeal to a wide range of buyers.
### END OF DESCRIPTION 3 ###

INSTRUCTIONS 

STEP 1: Review and Extract Features from Images

First, I want you review the images I have provided and output a bullet pointed list of features that could be used in a property description. DO NOT describe soft furnishings or movable items of furniture like sofa’s, TV’s, beds, plants, carpeting, headboards, chairs etc.

STEP 2: Add Additional Features

Review the content placed between the '<features>' tags.

<features> Clifford Road, London, Near train back garden goes on to park, 5 bedrooms, 4 bathrooms, Extension, Bright Loft conversion </features> 

Add these features to the list of bullet points created in Step 1.

STEP 3: Create a Property Listing Description

I want you to create me a property listing description based on the features you have extracted from the images and the additional features provided in Step 2. The description should ONLY include the features from the bullet points. Do not include any additional features that were not in the bullet points. The description must be around 700 words.


and nothing else. The description must be around 700 words.


Convert the combined list of bullet points from Steps 1 and 2 into a property listing description.

Ensure the description adheres to the following guidelines:

    1. You must only include the features noted in the bullet points.
    2. The description must be around 700 words.

STEP 4: Rewrite the Description in Specified Tone

Rewrite the description that you created in Step 3 to match the tone of my past examples (### DESCRIPTION 1 ###, ### DESCRIPTION 2 ###, ### DESCRIPTION 3 ###).

Note, this is a rewrite of the description you created in Step 3. It should NOT include any other features other than what was noted in the bullet points from Step 1 and 2. 

Follow these additional guidelines:

    1. Use British English vocabulary throughout.
    2. Simplify vocabulary; avoid complex or highly technical terms.
    3. Maintain the word count between 500-700 words.
    4. DO NOT use any words listed in the ### BAN LIST ###. If any banned words are used, a fine of $1000 will be imposed.
    
    ### BAN LIST ###
    Nestled, One, Culinary, Serenity, Sleeping quarters, serene, ample, bustling, residence, Hurdles, Bustling, Realm, Demistify, Insurmountable, Unprecedented, Delve, Enrich, Elevate, Supercharge, Delve, pride, dazzle, tapestry, hustle and bustle, oasis, exudes, ample
    ### END OF BAN LIST ###

<description0 />
<description1 />
<description2 />

I would only like the generation in Step 4 to be outputted, nothing else.

Take a deep breath and think about this problem step by step.
`;

export const SYSTEM_PROMPT = ``;

export const DEFAULT_DESCRIPTION_1 = `
Arguably one of the most impressive homes of its kind, this expansive 5 bedroom family home and is presented to an exceptional standard throughout. Successfully extended and upgraded by the current owners this spacious home offers flexible living accommodation over two levels that will appeal to wide range of buyers. Nicely positioned in Giffnock close to the village where there are local shops and restaurants. Also nearby Rouken Glen Park for those who love the outdoors, where there is a play area, skate park, five-a-side football pitches, a café and boating pond. Good public transport links with easy access to Glasgow City Centre and of course it is within the sought after catchment area for high ranking schools including St Ninians High School, as well as popular private schools.

The internal accommodation comprises; grand and welcoming entrance hallway with wooden bamboo floors and attractive wooden panelling. An immediately impressive formal lounge with feature fire surround, box bay window to front and two striking porthole stained glass windows.  The formal dining room offers flexible use and is currently set up as a family games room. To the rear there is a phenomenal open plan L-shaped kitchen/ sitting room – the hub of this family home. The huge space is ideal for entertaining and for everyday use. The kitchen is fitted with quality high gloss units, integrated appliances and a breakfast bar for casual dining. A door from the kitchen/ sitting room opens onto the rear gardens. The principal bedroom on the ground floor has fitted wardrobes and a luxurious en-suite shower room. Completing the ground floor is a single bedroom/ home office, a utility room and a wc/cloaks.

The upper level has a fabulous hallway with several large Velux windows that flood the space with natural light throughout the day. There is a double bedroom that has an en-suite shower room, three further well proportioned bedrooms and a family bathroom with fresh white four price suite including separate shower.

The specification includes gas central heating and double glazing. The rear gardens are a real feature of this property offering a good sized lawn and a separate wooden decked area – a great space for entertaining outside in fine weather. To the front of the property there are twin driveways with off-street parking for several cars and a single garage for secure parking and extra storage. Overall this is an outstanding home and one that is certain to impress.

`;

export const DEFAULT_DESCRIPTION_2 = `
Arguably one of the most impressive penthouse apartments set within this highly regarded development by Dickie Homes. Upgraded to a high standard throughout and offering spacious and flexibly living accommodation. Occupying the top floor ad originally set out as a four bedroom flat, the current owners have cleverly adapted the accommodation to offer larger living spaces and three bedrooms. Tucked away from busy main roads, yet on the doorstep of the thriving West End where there are a vast array of shops, bars and restaurants as well as excellent public transport links. Also close to the Botanic Gardens which offers a fabulous place to take a walk on a sunny day.

The internal accommodation comprises; broad and welcoming entrance hallway with two storage cupboards off. The formal lounge has dual aspects to the front and rear. There is a feature electric fireplace and access to a private balcony – perfect to relaxing in the sun with a glass of wine after a long day. The kitchen has been completely refitted (2023) with quality wall and floor units, wooden worktops, integrated appliances and an island unit for casual dining. The kitchen is open plan with a beautiful sitting room/ dining room with bay window to the rear overlooking the communal gardens and surrounding mature trees. The principal bedroom is a spacious double room and it has a walk-in dressing room/ wardrobes as well as a luxurious, refitted ensuite shower room with fresh white three piece suite. The principal bedroom also has direct access to the balcony for added convenience. There are two further well-proportioned double bedrooms (one of which has fitted wardrobes), and a guest bathroom with three piece suite, fitted storage and plumbing for appliances.

The specification includes gas central heating, double glazing and security controlled entrance. The communal areas are exceptionally well maintained by an appointed factor and there is lift access to all floors. To the front there is residents and visitor parking, and this particular property has a single garage with light and power for secure parking and extra storage. This home is a real one-off, and internal viewing is essential in order to fully appreciate the level of accommodation on offer.
`;

export const DEFAULT_DESCRIPTION_3 = `
A beautiful three bedroom luxury apartment by Cala Homes set on the second floor with private balcony and parking. Surrounded by matures trees and open parkland in the sought after Jordanhill Park development, and has been tastefully decorated throughout by the current owner. Finished to an incredibly high standard and offered to the market in true walk-in condition. A peaceful location in this exclusive development with acres of Parkland to enjoy the outdoors, whilst being moments from the heart of the thriving West End where there are a vast array of trendy shops bars and restaurants as well as excellent public transport links. Also on the doorstep of high ranking schools, tennis clubs and Leisure clubs including nearby David Lloyd.

The internal accommodation comprises; broad and welcoming entrance hallway with storage cupboard off, immediately impressive L-shaped lounge/ dining kitchen with windows looking onto the surrounding trees and parkland. The kitchen is fitted with quality wall and floor units, integrated appliances and there is plenty of space for a dining table and chairs. The open plan sitting area makes a great space for relaxing after a long day or for entertaining guests. There are patio doors opening onto the private balcony. The principal bedroom has an en-suite shower room as well as fitted wardrobes. There are two further well proportioned double bedrooms (both have fitted wardrobes), and a bathroom with fresh white three piece suite and over-bath shower. Completing the accommodation is a useful utility room with plumbing for appliances.

The specification includes high performance double glazing, gas central heating and security controlled entrance. The communal areas are well maintained by an appointed factor and there is lift access to all floors. To the front there is residents parking. An exceptional home that is certain to appeal to a wide range of buyers.
`;
