export const PROMPT = `

Act like an expert copywriter who specializes in property sales and rentals in the UK. You have over 20 years of experience in this field. 

Here is an example of a past description. 

<description0 />
 
INSTRUCTIONS 

Perform the following steps in order.

STEP 1: Review and Extract Features from Images

First, I want you review the images I have provided and output a bullet pointed list of features that could be used in a property description. DO NOT describe soft furnishings or movable items of furniture like sofa’s, TV’s, beds, lights, plants, carpeting, headboards, chairs, radiators etc.

STEP 2: Review Features

Now, I want you to review the feature list you created in STEP 1 and remove any features that are NOT present in the images. 

Output this list in between these tags: <reviewed_features> </reviewed_features>

STEP 3: Add Additional Features

Review the content placed between the '<features>' tags.

<features>

</features> 

I want you to combine the list of features <reviewed_features> with the features noted between the <features> tags.

STEP 4: Combine Features

Now, simply output the list of features you have for this property. 

STEP 5: Create a Property Listing Description

Now, I want you to create me a property listing description by following the strict guidelines below.

Guidelines:
    1. The description must ONLY include the features you have noted in STEP 4. You will be fined $1000 if you add any additonal features into the description.
    2. DO NOT describe living spaces unless they have been specifically mentioned in the feature list. 
    4. The description must be a similar length to my previous descriptions.
    5. Simplify your vocabulary; avoid complex or highly technical terms that could confuse potential buyers.
    6. Employ British English vocabulary throughout the description.
    8. Output this description in between these tags: <first_attempt> </first_attempt>

Your objective is to craft a property description that not only thoroughly outlines the property's specifications and key features, but also encapsulates a sense of allure and urgency, encouraging potential buyers or renters to take action.

STEP 6: Review description length

Now, I want you to ensure the description is a similar length to my previous examples. If the <first_attempt> is to short or to long, I would like you to rewrite this to match the length of my previous examples.

STEP 7: Apply my tone and style to this description

Now, I want you to review the description and ensure it matches the same tone, style and structure as my previous listings. Output this description in between these tags: <second_attempt> </second_attempt>

STEP 8: Review the words in the <second_attempt> description words against my list of <BANNED_WORDS>

Now I want you to review each word noted in between the <BANNED_WORDS> tags below. I want you to identify if any of these words are present in the <second_attempt> description.

<BANNED_WORDS>
    Nestled 
    One 
    Culinary
    Serenity
    Sleeping quarters
    serene
    ample
    bustling
    residence
    Hurdles
    Bustling
    Realm
    Demistify
    Insurmountable
    Unprecedented
    Delve
    Enrich
    Elevate
    Supercharge
    Delve
    pride
    dazzle
    tapestry
    hustle and bustle
    oasis
    exudes
    ample
</BANNED_WORDS>

STEP 9: Remove words that are in the <BANNED_WORDS>
    
If you identified any words from the <BANNED_WORDS> in Step 7, I want you to replace these words but keep the rest of the description identical. 

Output the new description in between these tags: <third_attempt> </third_attempt>. 

STEP 10: Extract features from property description

Now, I want you to extract a list of features and living spaces that you have outlined in your <third_attempt> description.

STEP 11: Compare 

Now, I want you to compare the feature list from STEP 4, against the feature list from STEP 10 and tell me the differances.

STEP 11: Remove unwanted features

If there are any features present that are NOT in the STEP 4 feature list, I want you to remove them from the description. 

Output the new description in between these tags: <forth_attempt> </forth_attempt>. 

STEP 12: Output

Output the <forth_attempt> property listing description in between ### THEAH DESCRIPTION ### ### END ### .

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

A fabulous four bedroom detached family home set in the much sought after Mosshead area of Bearsden. Also within walking distance of the coveted Mosshead Primary and Bearsden Academy schools and enjoying open aspects onto Heather Park and Playground to the front. This beautiful home is finished to a high standard throughout and offers flexible living accommodation over two levels that will suit a wide range of buyers. Close to both Bearsden Cross and Milngavie Town Centre where there are a range of local amenities as well as excellent public transport links with easy access to Glasgow City centre. Bearsden also has a range of sports facilities including tennis clubs, a golf club, the new Allander Sports Centre and the Bearsden Ski Club.

The internal accommodation comprises; welcoming entrance hallway with large storage cupboards off, impressive 15’10 double aspect lounge with views onto the front garden and Heather Park - opening into a stunning dining kitchen. The dining kitchen extends to over 28’ and offers a great space for families and for entertaining. The kitchen has been refitted with quality Wren wall and floor units and integrated Bosch appliances and has a useful utility room to the rear.

On the ground floor the forth bedroom (double) is currently being used as a sitting/family room and there is a modern shower room with fresh white three piece suite. The upper level has three well-proportioned bedrooms. Master bedroom has fitted wardrobes and views to the front of the property and over the Campsie Hills. Bedroom 2 – another double bedroom with walk in wardrobe/storage. Bedroom 3 – Single bedroom with fitted storage and views over the rear garden. Completing the accommodation is a refitted family bathroom with fresh white three piece suite, underfloor heating and Porcelanosa tiles and over-bath waterfall shower.

The specification includes gas central heating and double glazing. The private rear South west facing gardens are a real feature of this family home. There is a raised composite deck accessed via a patio door from the dining kitchen, a patio and a well maintained lawn, enclosed by fencing making it secure and child-safe. To the front there is a well-tended garden and a driveway running down the side of the property to a detached garage for secure parking and extra storage.
`;

export const DEFAULT_DESCRIPTION_3 = `

A phenomenal five bedroom, end terrace townhouse set in the exclusive Cala Jordanhill Park development offering spacious accommodation over three levels. Extending to around 1873 sq ft, this impressive family home is presented to the market in true walk-condition. Finished to a high spec throughout with luxury fixtures and fittings, and adaptable accommodation to suit a range of buyers. This highly energy efficient home, which is still under warranty, has solar panels, an EV charging system and an efficient gas boiler which considerably reduces energy costs. A peaceful location in this exclusive development with acres of Parkland to enjoy the outdoors, whilst being only moments from the heart of the thriving West End where there are a vast array of trendy shops, bars and restaurants as well as excellent public transport links. Also on the doorstep of high ranking schools, tennis clubs, supermarkets and Leisure clubs, including nearby David Lloyd.
The internal accommodation comprises; broad and welcoming entrance hallway with wc/cloaks off. A magnificent kitchen spanning the width of the property with luxury Nolte Kitchen, island unit, Silestone worktops and integrated Siemens appliances. There is plenty of space for a dining table and chairs and there are bi-folding doors that open onto the private rear decking and gardens. The utility room is set off the kitchen and provides direct access to the integral garage.

The first floor has a large 19’8 lounge with dual aspects (only found on these impressive end terrace homes), a spacious double bedroom with en-suite shower room and fitted wardrobes, a 5th bedroom/ home office, and a bathroom with fresh white three piece suite including Laufen sanitary ware and Porcelanosa tiling.

The second floor has a gorgeous principal bedroom with fitted wardrobes and a large en-suite shower room with four price suite including bath and separate shower. There are two further bedrooms offering flexible use that both have fitted wardrobes, and completing the accommodation is another bathroom with three piece suite.

The specification includes gas central heating, high performance double glazing and security alarm system. The enclosed rear gardens are a real feature of the property. They are enclosed and easily maintained with Astroturf and composite decking, offering a great space to relax outside in fine weather. To the front there is a double monobloc driveway and a single integral garage for secure parking and extra storage.

`;

export const EXTRACT_FEATURES_PROMPT = `
Act like an expert copywriter who specialises in property sales and rentals in the UK. You have over 20 years of experience in this field. 

INSTRUCTIONS 

Perform the following steps in order.

STEP 1: Review and Extract Features from Images

First, I want you review the images I have provided and output a bullet pointed list of features that could be used in a property description. DO NOT include soft furnishings or movable items of furniture like sofa’s, TV’s, beds, lights, plants, carpeting, headboards, chairs, radiators etc.

STEP 2: Review Features

Now, I want you to review the feature list you created in STEP 1 and remove any features that are NOT in the images. Output this list in between these tags: <reviewed_features> </reviewed_features>

STEP 3: Add Additional Features

Now, I want you to combine the list of features in the <features> tags below with the <reviewed_features> list you created in STEP 2.

<features>

</features> 

Output this list in between these tags: <combined_features> </combined_features>

STEP 4: Review Features

Now, generate a table that outlines each feature identified in the <combined_features> list, specifying the source of each feature. If a feature was found in an image, it should be labeled as "IMAGE" followed by the specific image it was found in. If a feature was found in the <features> list, it should be labeled as "KEY FEATURES". If the feature is an address or location, it should be labeled as "KEY FEATURES". The table should be formatted as follows:

FEATURE --> SOURCE

STEP 4: Output

Now, I want you to produce a list of the features noted in the table with a source equal to "IMAGE X" or "KEY FEATURES". Only output the feature name.

Output this in between these two tags ### THEAH FEATURES ### ### END ###

`;

export const GENERATE_DESCRIPTION_USING_FEATURES_PROMPT = `
Act like an expert copywriter who specializes in property sales and rentals in the UK. You have over 20 years of experience in this field. Here are some examples of my past descriptions:

STEP 1: Write a property description

Your objective is to craft a property listing description based on the features noted below. 

<features>

</features>

You must follow the strict guidelines below when creating this listing description. Guidelines: 

1. The description must ONLY include the features you have noted in the feature list above. You will be fined $1000 if you add any additonal features into the description. 
2. DO NOT describe living spaces unless they have been specifically mentioned in the feature list. 
3. Simplify your vocabulary; avoid complex or highly technical terms that could confuse potential buyers. 
4. Employ British English vocabulary throughout the description.
5. The description must be a minimum of 600 words.

Output the final description in between these tags: ### GENERIC DESCRIPTION ### ### END ### 
`;

export const IMPROVE_GENERATED_DESCRIPTION = `
You are an expert copywriter who specialises in writing real estate sales and marketing content. You have 20 years experiance in this field. 

I want you to analyse this creators style. My goals is to emulate this style when for creating my own property description. The structure, formatting, sentenace length and wording are very important to do so. 

<description0 />
<description1 />
<description2 />

FOLLOW-UP

Now I want you to reword the ### PROPERTY DESCRIPTION ### noted below and make a new property listing description out of it in the same style as above. 

### PROPERTY DESCRIPTION ### 

<theahdescription />

### END OF PROPERTY DESCRIPTION ### 

Ensure you DO NOT include any additional features that are not in the ### PROPERTY DESCRIPTION ###.

Avoid using any words noted in the <BAN_LIST>. You will be fined $1000 if you use any words from the <BAN_LIST>

<BAN_LIST>
Nestled 
One 
Culinary
Serenity
Sleeping quarters
serene
ample
bustling
residence
Hurdles
Bustling
Realm
Demistify
Insurmountable
Unprecedented
Delve
Enrich
Elevate
Supercharge
Delve
pride
dazzle
tapestry
hustle and bustle
oasis
exudes
ample
</BAN_LIST>

Output the final description in between these tags: ### THEAH DESCRIPTION ### ### END ### 

`;
