const getResponse = (message) => {
  const msg = message.toLowerCase();

  // ========== TRIPLE / SEVERE COMBINATIONS ==========

  // Fever + Cough + Breathing Difficulty
  if (msg.includes("fever") && msg.includes("cough") && (msg.includes("breathing") || msg.includes("breath") || msg.includes("shortness"))) {
    return `
🚨 This could be a serious respiratory infection (like pneumonia or COVID-19).

💊 Suggested medicines:
- Paracetamol 500 mg (for fever) – every 6–8 hours if needed
- Cough syrup (ambroxol-based) as per label
- Do NOT self-medicate antibiotics

🛑 Advice:
- Isolate yourself immediately
- Monitor oxygen levels (SpO2) if possible
- Stay hydrated and take rest

⚠️ URGENT: Seek immediate medical help if:
- SpO2 drops below 94%
- Breathing difficulty worsens
- Chest pain occurs
`;
  }

  // Fever + Vomiting + Diarrhea
  if (msg.includes("fever") && (msg.includes("vomiting") || msg.includes("vomit")) && (msg.includes("diarrhea") || msg.includes("loose motion"))) {
    return `
🚨 This could be gastroenteritis or food poisoning — risk of dehydration is HIGH.

💊 Suggested medicines:
- Paracetamol 500 mg (for fever)
- ORS (Oral Rehydration Salts) – mix in water and sip frequently
- Zinc tablets – once daily for 10–14 days
- Probiotics (like Vizylac / Econorm)

🛑 Advice:
- Sip ORS solution after every loose stool
- Avoid milk, oily, spicy, and fibrous food
- Eat bland food (rice, banana, toast, curd)

⚠️ URGENT: Go to a hospital if:
- You can't keep fluids down
- Blood in stool or vomit
- Signs of severe dehydration (dry mouth, dark urine, dizziness)
- Fever above 102°F
`;
  }

  // Chest Pain + Breathing Difficulty
  if ((msg.includes("chest pain") || msg.includes("chest")) && (msg.includes("breathing") || msg.includes("breath") || msg.includes("shortness"))) {
    return `
🚨 EMERGENCY: Chest pain with breathing difficulty can be life-threatening.

💊 Do NOT self-medicate for this.

🛑 Immediate Actions:
- Call emergency services (112 / 911) immediately
- Sit in a comfortable position (slightly propped up)
- Loosen tight clothing
- Do NOT exert yourself
- If you have prescribed nitroglycerin, take it as directed

⚠️ This could be a heart attack, pulmonary embolism, or severe lung condition.
DO NOT WAIT — get emergency help NOW.
`;
  }

  // Fever + Body Pain + Chills
  if (msg.includes("fever") && (msg.includes("body pain") || msg.includes("body ache") || msg.includes("muscle pain")) && (msg.includes("chill") || msg.includes("shiver"))) {
    return `
This may indicate malaria, dengue, or a severe viral infection.

💊 Suggested medicines:
- Paracetamol 500 mg – every 6–8 hours (max 3g/day)
- Do NOT take Ibuprofen/Aspirin (can worsen bleeding risk in dengue)

🛑 Advice:
- Get a blood test (CBC, MP, Dengue NS1/IGM) as soon as possible
- Rest completely
- Drink plenty of fluids (water, coconut water, ORS)
- Monitor platelet count if dengue is suspected

⚠️ See a doctor URGENTLY if:
- Fever is very high (above 103°F)
- Skin rash or bleeding appears
- Severe headache behind the eyes
- Vomiting persistently
`;
  }

  // ========== DOUBLE COMBINATIONS ==========

  // Fever + Cough
  if (msg.includes("fever") && msg.includes("cough")) {
    return `
You may have a viral infection (like flu).

💊 Suggested medicines:
- Paracetamol 500 mg (for fever) – every 6–8 hours if needed (max 2–3 tablets/day)
- Cough syrup (like dextromethorphan-based) as per label

🛑 Advice:
- Stay hydrated and take proper rest
- Use warm fluids (tea, soup)

⚠️ See a doctor if:
- Fever lasts more than 3 days
- Breathing difficulty occurs
`;
  }

  // Fever + Headache
  if (msg.includes("fever") && msg.includes("headache")) {
    return `
This may be due to viral fever or sinusitis.

💊 Suggested medicines:
- Paracetamol 500 mg – every 6–8 hours if needed

🛑 Advice:
- Drink plenty of fluids
- Take rest in a dark, quiet room
- Apply a cold compress on forehead

⚠️ Consult a doctor if symptoms worsen or persist beyond 2–3 days
`;
  }

  // Fever + Sore Throat
  if (msg.includes("fever") && (msg.includes("sore throat") || msg.includes("throat pain"))) {
    return `
This could be tonsillitis, pharyngitis, or a strep infection.

💊 Suggested medicines:
- Paracetamol 500 mg (for fever & pain)
- Warm salt water gargle – 3–4 times/day
- Throat lozenges (Strepsils / Cofsils)
- Betadine gargle (diluted) – 2 times/day

🛑 Advice:
- Drink warm fluids (honey + warm water)
- Avoid cold, oily, and spicy food
- Voice rest

⚠️ See a doctor if:
- White patches on tonsils
- Difficulty swallowing
- Fever lasts more than 3 days
- May need antibiotics (prescription only)
`;
  }

  // Fever + Body Pain
  if (msg.includes("fever") && (msg.includes("body pain") || msg.includes("body ache") || msg.includes("muscle pain") || msg.includes("muscle ache"))) {
    return `
This could be viral flu, dengue, or chikungunya.

💊 Suggested medicines:
- Paracetamol 500 mg – every 6–8 hours (for fever + pain)
- Avoid Aspirin and Ibuprofen (risk in dengue)

🛑 Advice:
- Complete bed rest
- Drink plenty of fluids
- Get blood tests (CBC, Dengue, Chikungunya) if fever persists
- Monitor for skin rash or joint swelling

⚠️ See a doctor if:
- Fever is above 103°F
- Rash appears
- Severe joint pain
`;
  }

  // Fever + Vomiting / Nausea
  if (msg.includes("fever") && (msg.includes("vomiting") || msg.includes("vomit") || msg.includes("nausea"))) {
    return `
This could be a stomach infection, food poisoning, or hepatitis.

💊 Suggested medicines:
- Paracetamol 500 mg (for fever) – take after food
- ORS solution – sip frequently
- Ondem (Ondansetron) 4 mg – for vomiting (if needed, max 3/day)

🛑 Advice:
- Eat bland food (rice, toast, banana)
- Avoid dairy, oily, spicy food
- Stay hydrated with small frequent sips

⚠️ See a doctor if:
- Vomiting doesn't stop
- Jaundice (yellow eyes/skin) appears
- Dark urine or pain in right side of abdomen
`;
  }

  // Fever + Chills
  if (msg.includes("fever") && (msg.includes("chill") || msg.includes("shiver"))) {
    return `
This may indicate malaria or a severe infection.

💊 Suggested medicines:
- Paracetamol 500 mg – for fever
- Warm blankets for chills

🛑 Advice:
- Get a malaria test (MP smear) immediately
- Monitor temperature regularly
- Stay hydrated

⚠️ See a doctor URGENTLY for blood tests and proper treatment
`;
  }

  // Fever + Rash
  if (msg.includes("fever") && (msg.includes("rash") || msg.includes("skin rash") || msg.includes("spots"))) {
    return `
This could be dengue, chickenpox, measles, or an allergic reaction.

💊 Suggested medicines:
- Paracetamol 500 mg (for fever)
- Calamine lotion – apply on rash for itching
- Avoid Aspirin/Ibuprofen

🛑 Advice:
- Do NOT scratch the rash
- Keep skin clean and dry
- Get blood tests (CBC, platelet count)
- Monitor for bleeding from gums/nose

⚠️ See a doctor IMMEDIATELY if:
- Bleeding occurs
- Rash spreads rapidly
- Fever is very high
- Platelet count is dropping
`;
  }

  // Fever + Fatigue
  if (msg.includes("fever") && (msg.includes("fatigue") || msg.includes("tired") || msg.includes("tiredness") || msg.includes("weakness"))) {
    return `
This could be a viral infection, typhoid, or dengue.

💊 Suggested medicines:
- Paracetamol 500 mg – for fever
- Multivitamin tablet – once daily
- ORS / Electrolyte drink

🛑 Advice:
- Complete bed rest
- Light nutritious food (khichdi, fruits, soup)
- Stay hydrated

⚠️ See a doctor if fatigue persists after fever resolves
`;
  }

  // Cough + Sore Throat
  if ((msg.includes("cough")) && (msg.includes("sore throat") || msg.includes("throat pain") || msg.includes("throat"))) {
    return `
You may have an upper respiratory infection or pharyngitis.

💊 Suggested medicines:
- Cough syrup (ambroxol or dextromethorphan-based)
- Throat lozenges (Strepsils)
- Warm salt water gargle – 3–4 times/day
- Betadine gargle – 2 times/day

🛑 Advice:
- Drink warm fluids (honey + warm water, ginger tea)
- Avoid cold drinks and fried food
- Steam inhalation 2–3 times/day
- Voice rest

⚠️ See a doctor if:
- Cough lasts more than a week
- Blood in cough
- Difficulty swallowing
`;
  }

  // Cold + Cough
  if (msg.includes("cold") && msg.includes("cough")) {
    return `
You likely have a common cold or flu.

💊 Suggested medicines:
- Cetirizine 10 mg – at night (for cold/runny nose)
- Cough syrup (dextromethorphan for dry cough / ambroxol for wet cough)
- Steam inhalation – 2–3 times/day
- Paracetamol 500 mg if body pain/fever

🛑 Advice:
- Drink warm fluids (turmeric milk, ginger tea, soup)
- Stay warm and rest
- Blow nose gently
- Use Vicks/saline nasal drop for congestion

⚠️ See a doctor if symptoms last more than 7 days
`;
  }

  // Cold + Sore Throat
  if (msg.includes("cold") && (msg.includes("sore throat") || msg.includes("throat pain"))) {
    return `
You may have a viral upper respiratory infection.

💊 Suggested medicines:
- Cetirizine 10 mg – at night
- Throat lozenges (Strepsils)
- Warm salt water gargle – 3–4 times/day
- Steam inhalation

🛑 Advice:
- Drink warm fluids
- Avoid cold and oily food
- Rest your voice

⚠️ Usually resolves in 5–7 days. See a doctor if not.
`;
  }

  // Headache + Dizziness
  if (msg.includes("headache") && (msg.includes("dizziness") || msg.includes("dizzy") || msg.includes("lightheaded"))) {
    return `
This could be due to dehydration, migraine, low BP, or stress.

💊 Suggested medicines:
- Paracetamol 500 mg – for headache
- ORS / Electral water – for hydration

🛑 Advice:
- Drink at least 2–3 liters of water daily
- Rest in a quiet, dark room
- Check your blood pressure
- Eat regular meals (don't skip)

⚠️ See a doctor if:
- Dizziness is severe or persistent
- Fainting occurs
- Visual disturbances
`;
  }

  // Headache + Nausea / Vomiting
  if (msg.includes("headache") && (msg.includes("nausea") || msg.includes("vomiting") || msg.includes("vomit"))) {
    return `
This could be a migraine or increased intracranial pressure.

💊 Suggested medicines:
- Paracetamol 500 mg – for headache
- Ondansetron 4 mg – for nausea (if needed)
- Rest in a dark, quiet room

🛑 Advice:
- Avoid screen time and bright light
- Apply cold compress on forehead
- Avoid strong smells
- Stay hydrated with small sips

⚠️ Seek URGENT medical help if:
- Worst headache of your life (thunderclap)
- Stiff neck with fever
- Confusion or vision loss
`;
  }

  // Stomach Pain + Nausea / Vomiting
  if ((msg.includes("stomach pain") || msg.includes("stomach ache") || msg.includes("abdominal pain") || msg.includes("tummy pain")) && (msg.includes("nausea") || msg.includes("vomiting") || msg.includes("vomit"))) {
    return `
This could be gastritis, food poisoning, or a stomach infection.

💊 Suggested medicines:
- Antacid (Gelusil / Digene) – after meals
- Ondansetron 4 mg – for vomiting (max 3/day)
- ORS – sip frequently

🛑 Advice:
- Eat bland food (rice, toast, banana)
- Avoid spicy, oily, and dairy food
- Small frequent meals
- Don't lie down immediately after eating

⚠️ See a doctor if:
- Pain is severe or in the upper right area
- Blood in vomit
- Fever accompanies pain
`;
  }

  // Stomach Pain + Diarrhea
  if ((msg.includes("stomach pain") || msg.includes("stomach ache") || msg.includes("abdominal pain")) && (msg.includes("diarrhea") || msg.includes("loose motion") || msg.includes("loose motions"))) {
    return `
This could be gastroenteritis or food poisoning.

💊 Suggested medicines:
- ORS (Oral Rehydration Salts) – after every loose stool
- Zinc tablet – once daily for 10–14 days
- Probiotics (Econorm / Vizylac) – twice daily
- Eldoper (Loperamide) 2 mg – only if no fever/blood in stool (max 2 tabs)

🛑 Advice:
- BRAT diet (Banana, Rice, Applesauce, Toast)
- Avoid milk, fiber-rich, oily food
- Stay hydrated — this is critical

⚠️ See a doctor if:
- Blood or mucus in stool
- High fever
- Signs of dehydration (dry mouth, less urine)
- More than 6 loose stools in 24 hours
`;
  }

  // Stomach Pain + Acidity
  if ((msg.includes("stomach pain") || msg.includes("stomach ache") || msg.includes("abdominal pain")) && (msg.includes("acidity") || msg.includes("acid") || msg.includes("heartburn") || msg.includes("burning"))) {
    return `
This could be acid reflux (GERD) or gastritis.

💊 Suggested medicines:
- Antacid (Gelusil / Digene / Sucralfate) – after meals
- Pantoprazole 40 mg – once daily before breakfast (empty stomach)
- Avoid lying down after eating

🛑 Advice:
- Eat small, frequent meals
- Avoid spicy, fried, and acidic food
- Don't eat 2–3 hours before sleeping
- Elevate head while sleeping

⚠️ See a doctor if:
- Pain is severe
- Black or bloody stools
- Unexplained weight loss
`;
  }

  // Nausea + Diarrhea
  if ((msg.includes("nausea") || msg.includes("vomiting") || msg.includes("vomit")) && (msg.includes("diarrhea") || msg.includes("loose motion"))) {
    return `
This is likely a stomach infection or food poisoning.

💊 Suggested medicines:
- ORS – sip frequently
- Ondansetron 4 mg – for nausea/vomiting (max 3/day)
- Probiotics (Econorm) – twice daily
- Zinc tablet – once daily

🛑 Advice:
- Bland diet (rice, toast, banana, curd)
- Avoid dairy, oily, and spicy food
- Hydration is the most important thing

⚠️ See a doctor if:
- Symptoms last more than 2 days
- Blood in stool or vomit
- High fever
- Severe dehydration
`;
  }

  // Body Pain + Fatigue
  if ((msg.includes("body pain") || msg.includes("body ache") || msg.includes("muscle pain")) && (msg.includes("fatigue") || msg.includes("tired") || msg.includes("weakness") || msg.includes("tiredness"))) {
    return `
This could be due to overexertion, viral illness, or vitamin deficiency.

💊 Suggested medicines:
- Paracetamol 500 mg – for body pain (if needed)
- Multivitamin + Calcium + Vitamin D – once daily
- ORS / Electral – for hydration

🛑 Advice:
- Take adequate rest and sleep (7–8 hours)
- Stay hydrated
- Light stretching or gentle walk
- Balanced diet with fruits and vegetables

⚠️ See a doctor if:
- Fatigue lasts more than 2 weeks
- Unexplained weight loss
- Joint swelling or redness
`;
  }

  // Joint Pain + Swelling
  if ((msg.includes("joint pain") || msg.includes("knee pain") || msg.includes("arthritis")) && (msg.includes("swelling") || msg.includes("swollen"))) {
    return `
This could be arthritis, gout, or an injury.

💊 Suggested medicines:
- Ibuprofen 400 mg – after food (for pain and inflammation)
- Ice pack – apply on swollen joint for 15–20 minutes
- Rest the affected joint

🛑 Advice:
- Avoid weight-bearing on the affected joint
- Elevate the swollen limb
- Gentle range-of-motion exercises
- Avoid purine-rich food if gout (red meat, alcohol, beans)

⚠️ See a doctor if:
- Sudden severe joint pain
- Redness and warmth over joint
- Fever with joint swelling
- Unable to move the joint
`;
  }

  // Back Pain + Leg Pain / Sciatica
  if ((msg.includes("back pain") || msg.includes("lower back") || msg.includes("backache")) && (msg.includes("leg pain") || msg.includes("leg") || msg.includes("sciatica"))) {
    return `
This could be sciatica or a slipped disc.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 400 mg (after food)
- Muscle relaxant (like Thiocolchicoside 4 mg) – if prescribed
- Hot/cold compress on lower back

🛑 Advice:
- Avoid bending forward and lifting heavy objects
- Sleep on a firm mattress
- Gentle stretching (cat-cow, knee-to-chest)
- Sit with proper back support

⚠️ See a doctor URGENTLY if:
- Numbness in groin area
- Loss of bladder/bowel control
- Weakness in legs
`;
  }

  // Ear Pain + Fever
  if (msg.includes("ear pain") && msg.includes("fever")) {
    return `
This could be an ear infection (otitis media).

💊 Suggested medicines:
- Paracetamol 500 mg – for pain and fever
- Warm compress over the ear
- Otogesic ear drops – 2–3 drops (if no discharge)

🛑 Advice:
- Do NOT put water inside the ear
- Do NOT insert cotton swabs
- Keep the ear dry
- Sleep with the affected ear up

⚠️ See a doctor if:
- Pus or discharge from ear
- Hearing loss
- Pain worsens despite medication
- May need antibiotics
`;
  }

  // Eye Pain + Redness
  if ((msg.includes("eye pain") || msg.includes("eye")) && (msg.includes("red") || msg.includes("redness") || msg.includes("watering"))) {
    return `
This could be conjunctivitis (pink eye) or eye strain.

💊 Suggested medicines:
- Ciplox (Ciprofloxacin) eye drops – 1–2 drops, 4 times/day
- Lubricant eye drops (Refresh Tears) – as needed
- Cold compress on closed eyes

🛑 Advice:
- Do NOT rub your eyes
- Wash hands frequently
- Use a separate towel
- Avoid screen time for a while
- Remove contact lenses

⚠️ See an eye doctor if:
- Blurred vision
- Severe pain
- Sensitivity to light
- No improvement in 2–3 days
`;
  }

  // Anxiety + Insomnia
  if ((msg.includes("anxiety") || msg.includes("anxious") || msg.includes("panic")) && (msg.includes("insomnia") || msg.includes("sleep") || msg.includes("can't sleep") || msg.includes("sleepless"))) {
    return `
This may be an anxiety-related sleep disorder.

💊 Suggested medicines:
- Melatonin 3–5 mg – 30 minutes before sleep (short term only)
- Chamomile tea before bed
- Do NOT self-medicate sleeping pills

🛑 Advice:
- Fix a sleep schedule (same time daily)
- Avoid screens 1 hour before bed
- Deep breathing exercises (4-7-8 technique)
- Limit caffeine after 2 PM
- Regular physical activity

⚠️ See a psychiatrist/therapist if:
- Anxiety affects daily life
- Panic attacks occur
- Sleep problems last more than 2 weeks
`;
  }

  // Stress + Headache
  if ((msg.includes("stress") || msg.includes("tension")) && msg.includes("headache")) {
    return `
This is likely a tension headache caused by stress.

💊 Suggested medicines:
- Paracetamol 500 mg – for headache (as needed)
- Avoid daily painkiller use

🛑 Advice:
- Practice deep breathing and meditation
- Take breaks during work (every 45–60 min)
- Neck and shoulder stretches
- Adequate sleep (7–8 hours)
- Reduce screen time
- Walk in fresh air

⚠️ See a doctor if:
- Daily headaches
- Worsening pattern
- Vision problems with headache
`;
  }

  // Nosebleed + Headache
  if ((msg.includes("nosebleed") || msg.includes("nose bleed") || msg.includes("bleeding nose")) && msg.includes("headache")) {
    return `
This could indicate high blood pressure.

💊 Immediate Actions:
- Sit upright and lean FORWARD slightly
- Pinch the soft part of nose for 10–15 minutes
- Apply ice pack on the bridge of nose
- Do NOT tilt head back (blood can go into throat)

🛑 Advice:
- Check your blood pressure immediately
- Do NOT blow your nose for 24 hours
- Avoid hot drinks and strenuous activity

⚠️ See a doctor URGENTLY if:
- Bleeding doesn't stop after 20 minutes
- Blood pressure is very high
- Frequent nosebleeds
`;
  }

  // ========== SINGLE SYMPTOMS ==========

  // Fever
  if (msg.includes("fever")) {
    return `
You may have a fever.

💊 Suggested medicines:
- Paracetamol 500 mg – every 6–8 hours if temperature is high (max 3g/day)

🛑 Advice:
- Monitor temperature regularly
- Stay hydrated (water, ORS, coconut water)
- Rest completely
- Sponge with lukewarm water if fever is very high

⚠️ Seek medical help if:
- Fever is above 102°F (39°C)
- Fever lasts more than 3 days
- Chills, rash, or confusion develop
`;
  }

  // Cough
  if (msg.includes("cough")) {
    return `
You may have a cough.

💊 Suggested medicines:
- Dry cough: Dextromethorphan-based syrup (like Benadryl)
- Wet cough: Ambroxol / Guaifenesin-based syrup
- Throat lozenges for relief
- Honey + warm water

🛑 Advice:
- Drink warm fluids
- Avoid cold drinks
- Steam inhalation 2–3 times/day
- Sleep with head slightly elevated

⚠️ See a doctor if:
- Cough lasts more than a week
- Blood in sputum
- Wheezing or chest tightness
`;
  }

  // Headache
  if (msg.includes("headache")) {
    return `
You may have a headache.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 200–400 mg (after food)

🛑 Advice:
- Rest in a quiet, dark room
- Stay hydrated
- Apply cold/warm compress on forehead
- Reduce screen time
- Eat regular meals (hunger can cause headaches)

⚠️ See a doctor if:
- Worst headache of your life
- Headache with stiff neck and fever
- Vision changes
- Frequent headaches (more than 3/week)
- Avoid frequent painkiller use
`;
  }

  // Stomach Pain
  if (msg.includes("stomach pain") || msg.includes("stomach ache") || msg.includes("abdominal pain") || msg.includes("tummy pain")) {
    return `
This may be due to indigestion, gas, or gastritis.

💊 Suggested medicines:
- Antacid (Gelusil / Digene) – after meals
- Simethicone tablets (for gas relief)
- Cyclopam (for crampy pain) – if needed

🛑 Advice:
- Avoid oily/spicy/fried food
- Eat light, bland meals
- Don't skip meals
- Walk after eating
- Don't lie down immediately after food

⚠️ See a doctor if:
- Pain is severe or localized (especially lower right = appendix)
- Blood in stool or vomit
- Fever with abdominal pain
`;
  }

  // Cold
  if (msg.includes("cold") || msg.includes("runny nose") || msg.includes("blocked nose") || msg.includes("nasal congestion") || msg.includes("sneezing")) {
    return `
You might have a common cold.

💊 Suggested medicines:
- Cetirizine 10 mg – at night (for runny nose/sneezing)
- Steam inhalation – 2–3 times/day
- Vicks / Saline nasal drops – for congestion
- Paracetamol 500 mg – if body aches/fever

🛑 Advice:
- Stay warm
- Drink hot fluids (turmeric milk, ginger tea, soup)
- Blow nose gently
- Rest well

⚠️ Usually resolves in 5–7 days. See a doctor if symptoms last longer.
`;
  }

  // Sore Throat
  if (msg.includes("sore throat") || msg.includes("throat pain") || msg.includes("throat")) {
    return `
You may have pharyngitis or tonsillitis.

💊 Suggested medicines:
- Warm salt water gargle – 3–4 times/day
- Betadine gargle – 2 times/day
- Throat lozenges (Strepsils / Cofsils)
- Paracetamol 500 mg – if pain is significant

🛑 Advice:
- Drink warm fluids (honey + warm water)
- Avoid cold, spicy, and fried food
- Voice rest
- Steam inhalation

⚠️ See a doctor if:
- White patches on tonsils
- Difficulty swallowing
- Fever present
- Lasts more than 5 days
`;
  }

  // Body Pain / Muscle Pain
  if (msg.includes("body pain") || msg.includes("body ache") || msg.includes("muscle pain") || msg.includes("muscle ache")) {
    return `
This could be due to overexertion, viral illness, or deficiency.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 400 mg (after food)
- Hot compress / warm bath
- Gentle massage

🛑 Advice:
- Rest adequately
- Stay hydrated
- Stretch gently
- Balanced diet with protein and vitamins
- Check Vitamin D and B12 levels

⚠️ See a doctor if:
- Pain persists more than a week
- Joint swelling
- Fever accompanies body pain
`;
  }

  // Nausea / Vomiting
  if (msg.includes("nausea") || msg.includes("vomiting") || msg.includes("vomit")) {
    return `
This could be due to a stomach bug, food poisoning, or acidity.

💊 Suggested medicines:
- Ondansetron (Ondem) 4 mg – for vomiting (max 3/day)
- ORS – sip frequently
- Digene / Gelusil – if acidity present

🛑 Advice:
- Sip fluids slowly (don't gulp)
- Eat bland food (toast, rice, banana)
- Avoid strong smells
- Don't lie flat immediately after eating

⚠️ See a doctor if:
- Vomiting persists more than 24 hours
- Blood in vomit
- Signs of dehydration
- Severe abdominal pain
`;
  }

  // Diarrhea / Loose Motion
  if (msg.includes("diarrhea") || msg.includes("loose motion") || msg.includes("loose motions")) {
    return `
This could be a stomach infection or food poisoning.

💊 Suggested medicines:
- ORS (Oral Rehydration Salts) – after every loose stool
- Zinc tablet – once daily for 10–14 days
- Probiotics (Econorm / Vizylac) – twice daily
- Loperamide 2 mg – only if no fever/blood (max 2 tabs)

🛑 Advice:
- BRAT diet (Banana, Rice, Applesauce, Toast)
- Avoid milk, fiber-rich, oily food
- Hydration is MOST important
- Curd rice can help

⚠️ See a doctor if:
- Blood or mucus in stool
- High fever
- More than 6 stools in 24 hours
- Severe dehydration
`;
  }

  // Acidity / Heartburn
  if (msg.includes("acidity") || msg.includes("acid") || msg.includes("heartburn") || msg.includes("gastric") || msg.includes("burning chest")) {
    return `
This could be acid reflux (GERD) or gastritis.

💊 Suggested medicines:
- Antacid (Gelusil / Digene / Sucralfate) – after meals
- Pantoprazole 40 mg – once daily before breakfast (empty stomach)
- ENO / baking soda in water – for quick relief

🛑 Advice:
- Eat small, frequent meals
- Avoid spicy, fried, acidic food (tomato, citrus, coffee)
- Don't eat 2–3 hours before sleeping
- Elevate head while sleeping
- Avoid tight clothing around stomach

⚠️ See a doctor if:
- Heartburn more than twice/week
- Difficulty swallowing
- Black stools
- Unexplained weight loss
`;
  }

  // Constipation
  if (msg.includes("constipation") || msg.includes("constipated") || msg.includes("hard stool") || msg.includes("not passing stool")) {
    return `
This may be due to low fiber, dehydration, or a sedentary lifestyle.

💊 Suggested medicines:
- Isabgol (Psyllium husk) – 1–2 teaspoons with warm water at night
- Lactulose syrup – 15–30 ml at night (if needed)
- PEG (Polyethylene glycol) – as per label
- Glycerin suppository – for immediate relief

🛑 Advice:
- Drink at least 2–3 liters of water daily
- Eat high-fiber food (fruits, vegetables, whole grains, prunes)
- Regular walking/exercise
- Don't ignore the urge to go
- Fix a regular toilet time

⚠️ See a doctor if:
- Blood in stool
- Severe abdominal pain
- No bowel movement for more than 5 days
- Alternating constipation and diarrhea
`;
  }

  // Chest Pain (alone)
  if (msg.includes("chest pain") || msg.includes("chest")) {
    return `
⚠️ Chest pain should ALWAYS be taken seriously.

💊 Do NOT ignore chest pain.

🛑 Immediate Actions:
- Rest immediately
- If you have a history of heart issues, take your prescribed medicine
- Call for help

Possible causes:
- Heart attack (crushing pain, left arm/jaw pain, sweating)
- Acid reflux (burning, worsens after eating)
- Muscle strain (pain on movement)
- Anxiety (tightness, shortness of breath)

⚠️ Call emergency services (112/911) if:
- Pain is severe, crushing, or squeezing
- Pain radiates to left arm, jaw, or back
- Sweating, nausea, dizziness
- Shortness of breath
`;
  }

  // Breathing Difficulty (alone)
  if (msg.includes("breathing") || msg.includes("shortness of breath") || msg.includes("breath") || msg.includes("breathless")) {
    return `
⚠️ Breathing difficulty needs urgent evaluation.

💊 Do NOT self-medicate for breathing difficulty.

🛑 Immediate Actions:
- Sit upright (don't lie flat)
- Loosen tight clothing
- Use your inhaler if you have asthma
- Try pursed-lip breathing (breathe in through nose, out through pursed lips)
- Open windows for fresh air

⚠️ Call emergency services if:
- Breathing difficulty is sudden or severe
- Lips or fingers turn blue
- Cannot speak full sentences
- Chest pain with breathing difficulty
`;
  }

  // Dizziness / Vertigo
  if (msg.includes("dizziness") || msg.includes("dizzy") || msg.includes("vertigo") || msg.includes("lightheaded")) {
    return `
This could be due to low BP, dehydration, inner ear issues, or vertigo.

💊 Suggested medicines:
- Betahistine (Vertin) 16 mg – 3 times/day (for vertigo)
- ORS / Electral water – for hydration
- Rest in a comfortable position

🛑 Advice:
- Sit or lie down immediately when dizzy
- Change positions slowly (sit before standing)
- Drink plenty of water
- Check blood pressure
- Avoid driving

⚠️ See a doctor if:
- Fainting occurs
- Vertigo is severe or persistent
- Hearing loss or ringing in ears
- Neurological symptoms (weakness, numbness, slurred speech)
`;
  }

  // Fatigue / Tiredness
  if (msg.includes("fatigue") || msg.includes("tired") || msg.includes("tiredness") || msg.includes("weakness") || msg.includes("low energy") || msg.includes("exhausted")) {
    return `
This could be due to anemia, vitamin deficiency, thyroid, or stress.

💊 Suggested medicines:
- Multivitamin + Iron + B12 supplement – once daily
- ORS / Electral – for hydration
- Coconut water for natural energy

🛑 Advice:
- Get 7–8 hours of sleep
- Stay hydrated (2–3 liters water)
- Regular light exercise
- Balanced diet (iron-rich food: spinach, dates, eggs)
- Reduce stress

⚠️ See a doctor if:
- Fatigue lasts more than 2 weeks
- Unexplained weight change
- Hair loss, cold intolerance (thyroid?)
- Get blood tests (CBC, Thyroid, Iron, B12, Vitamin D)
`;
  }

  // Joint Pain
  if (msg.includes("joint pain") || msg.includes("knee pain") || msg.includes("arthritis") || msg.includes("elbow pain") || msg.includes("ankle pain")) {
    return `
This could be osteoarthritis, rheumatoid arthritis, or gout.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 400 mg (after food)
- Hot/cold compress on the joint
- Diclofenac gel – apply locally

🛑 Advice:
- Rest the affected joint
- Gentle range-of-motion exercises
- Maintain healthy weight
- Apply ice if swollen, heat if stiff
- Avoid repetitive strain

⚠️ See a doctor if:
- Joint is red, warm, and swollen
- Severe sudden pain (could be gout)
- Morning stiffness lasting more than 30 minutes
- Fever with joint pain
`;
  }

  // Back Pain
  if (msg.includes("back pain") || msg.includes("lower back") || msg.includes("backache") || msg.includes("upper back")) {
    return `
This could be muscle strain, poor posture, or a disc problem.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 400 mg (after food)
- Hot/cold compress
- Muscle relaxant gel (Volini / Moov) – apply locally

🛑 Advice:
- Maintain good posture
- Sleep on a firm mattress
- Avoid heavy lifting and bending
- Gentle stretching (cat-cow, child's pose)
- Core strengthening exercises
- Take breaks if sitting long hours

⚠️ See a doctor if:
- Pain radiates to legs
- Numbness or tingling in legs
- Loss of bladder/bowel control
- Pain after injury/accident
`;
  }

  // Ear Pain
  if (msg.includes("ear pain") || msg.includes("earache") || msg.includes("ear infection")) {
    return `
This could be an ear infection or wax buildup.

💊 Suggested medicines:
- Paracetamol 500 mg – for pain
- Otogesic ear drops – 2–3 drops (if no ear discharge)
- Warm compress over the ear

🛑 Advice:
- Do NOT put water inside the ear
- Do NOT insert cotton swabs or any objects
- Keep the ear dry
- Sleep with the affected ear facing up
- Yawn or chew gum to relieve pressure

⚠️ See a doctor if:
- Pus or discharge from ear
- Hearing loss
- Pain worsens
- Fever develops
`;
  }

  // Eye Pain / Redness
  if (msg.includes("eye pain") || msg.includes("eye") || msg.includes("red eye") || msg.includes("conjunctivitis") || msg.includes("pink eye")) {
    return `
This could be conjunctivitis, eye strain, or allergies.

💊 Suggested medicines:
- Ciprofloxacin eye drops – 1–2 drops, 4 times/day
- Lubricant eye drops (Refresh Tears) – as needed
- Cold compress on closed eyes

🛑 Advice:
- Do NOT rub your eyes
- Wash hands frequently
- Use a separate towel and pillow
- Avoid screen time
- Remove contact lenses
- Wear sunglasses outdoors

⚠️ See an eye doctor if:
- Blurred vision
- Severe pain
- Sensitivity to light
- No improvement in 2–3 days
`;
  }

  // Skin Rash / Itching
  if (msg.includes("rash") || msg.includes("itching") || msg.includes("skin rash") || msg.includes("hives") || msg.includes("itchy")) {
    return `
This could be an allergy, eczema, fungal infection, or insect bite.

💊 Suggested medicines:
- Cetirizine 10 mg – for itching (at night)
- Calamine lotion – apply on rash
- Moisturizer (for dry skin)
- Clocip / Clotrimazole cream – if fungal (in groin/armpit/toes)

🛑 Advice:
- Do NOT scratch — it worsens the rash
- Keep the area clean and dry
- Avoid known allergens (new soap, food, etc.)
- Wear loose cotton clothing
- Avoid hot showers

⚠️ See a dermatologist if:
- Rash spreads rapidly
- Blisters or pus
- Fever with rash
- Rash doesn't improve in 5–7 days
`;
  }

  // Allergy / Sneezing
  if (msg.includes("allergy") || msg.includes("allergic") || msg.includes("sneezing") || msg.includes("sneezing a lot")) {
    return `
This could be an allergic reaction (dust, pollen, food, etc.).

💊 Suggested medicines:
- Cetirizine 10 mg – once at night
- Montelukast 10 mg – once at night (if recurrent)
- Nasal spray (Fluticasone) – if nasal congestion
- Avoid allergen exposure

🛑 Advice:
- Identify and avoid the allergen
- Keep surroundings clean
- Use an air purifier if possible
- Wash bedding regularly
- Wear a mask in dusty areas

⚠️ Seek EMERGENCY help if:
- Swelling of face/lips/tongue/throat
- Difficulty breathing
- Hives all over body
- Dizziness or fainting (anaphylaxis)
`;
  }

  // Anxiety / Stress
  if (msg.includes("anxiety") || msg.includes("anxious") || msg.includes("panic") || msg.includes("stress") || msg.includes("tension")) {
    return `
This may be an anxiety or stress-related issue.

💊 Suggested medicines:
- Do NOT self-medicate anxiety — see a professional
- Short term: Melatonin 3–5 mg (for sleep only)
- Herbal: Ashwagandha, Chamomile tea

🛑 Advice:
- Deep breathing exercises (4-7-8 technique)
- Regular physical activity (walk, yoga)
- Limit caffeine and alcohol
- Talk to someone you trust
- Mindfulness/meditation (10 min/day)
- Reduce screen time before bed
- Journal your thoughts

⚠️ See a psychiatrist/therapist if:
- Anxiety affects daily life
- Panic attacks occur
- Persistent worry you can't control
- Suicidal thoughts — call helpline IMMEDIATELY
`;
  }

  // Insomnia / Sleep Issues
  if (msg.includes("insomnia") || msg.includes("can't sleep") || msg.includes("sleepless") || msg.includes("sleep problem") || msg.includes("not sleeping")) {
    return `
This could be insomnia or a sleep disorder.

💊 Suggested medicines:
- Melatonin 3–5 mg – 30 minutes before bed (short term)
- Chamomile / lavender tea before bed
- Do NOT take sleeping pills without prescription

🛑 Advice:
- Fix a regular sleep-wake schedule
- Avoid screens 1 hour before bed
- Keep bedroom dark, cool, and quiet
- Avoid caffeine after 2 PM
- No heavy meals before bed
- Exercise regularly (but not before sleep)
- Relaxation techniques (deep breathing, progressive muscle relaxation)

⚠️ See a doctor if:
- Insomnia lasts more than 3 weeks
- Daytime sleepiness affects work
- Sleep apnea symptoms (loud snoring, gasping)
`;
  }

  // Nosebleed
  if (msg.includes("nosebleed") || msg.includes("nose bleed") || msg.includes("bleeding nose")) {
    return `
A nosebleed can be caused by dry air, picking, or high BP.

💊 Immediate Actions:
- Sit upright and lean FORWARD slightly
- Pinch the soft part of your nose for 10–15 minutes
- Apply ice pack on the bridge of nose
- Breathe through your mouth
- Do NOT tilt your head back

🛑 Advice:
- Don't blow your nose for 24 hours
- Keep nasal passages moist (saline spray/Vaseline)
- Avoid hot drinks and exercise for 24 hours
- Check your blood pressure

⚠️ See a doctor if:
- Bleeding doesn't stop after 20 minutes
- Very heavy bleeding
- Frequent nosebleeds
- On blood thinners
`;
  }

  // Mouth Ulcers
  if (msg.includes("mouth ulcer") || msg.includes("ulcer") || msg.includes("canker sore") || msg.includes("mouth sore")) {
    return `
This could be a mouth ulcer (canker sore) or vitamin deficiency.

💊 Suggested medicines:
- Hexigel / Smyle mouth ulcer gel – apply 3–4 times/day
- Tantum mouthwash – gargle 2–3 times/day
- Vitamin B complex – once daily
- Orasolve gel – for pain relief

🛑 Advice:
- Avoid spicy, salty, and acidic food
- Use a soft toothbrush
- Rinse with warm salt water
- Stay hydrated
- Manage stress

⚠️ See a doctor if:
- Ulcers last more than 2 weeks
- Very large or painful ulcers
- Recurring frequently
- Fever with ulcers
`;
  }

  // Toothache
  if (msg.includes("toothache") || msg.includes("tooth pain") || msg.includes("tooth") || msg.includes("dental pain")) {
    return `
This could be a cavity, gum infection, or tooth abscess.

💊 Suggested medicines:
- Paracetamol 500 mg OR Ibuprofen 400 mg (after food) – for pain
- Clove oil – apply on the affected tooth with cotton
- Salt water rinse – 3–4 times/day

🛑 Advice:
- Avoid very hot/cold/sweet food
- Brush and floss gently
- Don't chew on the affected side
- Rinse with warm salt water

⚠️ See a dentist as soon as possible. Dental issues rarely resolve on their own.
`;
  }

  // Burns
  if (msg.includes("burn") || msg.includes("burns") || msg.includes("burned") || msg.includes("burnt")) {
    return `
⚠️ Treat burns immediately to prevent damage.

💊 Immediate Actions:
- Run COOL (not cold/ice) water over the burn for 10–20 minutes
- Do NOT apply ice, butter, toothpaste, or any home remedy
- Do NOT burst blisters

For Minor Burns:
- Apply Burnol / Silverex cream
- Cover with a clean, non-stick dressing
- Paracetamol 500 mg for pain

🛑 Advice:
- Keep the burn clean and dry
- Don't peel off blistered skin
- Drink plenty of water

⚠️ Go to the hospital IMMEDIATELY if:
- Burn is larger than 3 inches
- Burn is on face, hands, feet, groin, or joints
- Burn appears white, charred, or leathery (3rd degree)
- Signs of infection (pus, increasing pain, fever)
`;
  }

  // Cuts / Wounds
  if (msg.includes("cut") || msg.includes("wound") || msg.includes("bleeding") || msg.includes("injury") || msg.includes("scratch")) {
    return `
Proper wound care prevents infection.

💊 Immediate Actions:
- Apply firm pressure with a clean cloth to stop bleeding
- Wash the wound with clean water and mild soap
- Apply Betadine / Savlon antiseptic
- Cover with a clean bandage/Band-Aid

For Pain:
- Paracetamol 500 mg as needed

🛑 Advice:
- Change dressing daily or when wet
- Keep wound clean and dry
- Watch for signs of infection (redness, swelling, pus, warmth)

⚠️ See a doctor if:
- Bleeding doesn't stop after 10 minutes of pressure
- Wound is deep (may need stitches)
- Foreign object embedded
- You haven't had a tetanus shot in 5+ years
- Signs of infection develop
`;
  }

  // Insect Bite
  if (msg.includes("insect bite") || msg.includes("mosquito bite") || msg.includes("bug bite") || msg.includes("bee sting") || msg.includes("ant bite")) {
    return `
This could be a normal insect bite or allergic reaction.

💊 Suggested medicines:
- Cetirizine 10 mg – for itching
- Calamine lotion – apply on bite
- Paracetamol 500 mg – if pain
- Hydrocortisone 1% cream – for inflammation

🛑 Advice:
- Wash the area with soap and water
- Apply ice pack for swelling
- Do NOT scratch
- Remove stinger if present (scrape, don't squeeze)

⚠️ Seek EMERGENCY help if:
- Swelling of face/lips/tongue/throat
- Difficulty breathing
- Dizziness or fainting
- Nausea/vomiting after bite
- Multiple stings
`;
  }

  // Chills
  if (msg.includes("chill") || msg.includes("shiver") || msg.includes("shivering")) {
    return `
Chills often indicate an oncoming fever or infection.

💊 Suggested medicines:
- Paracetamol 500 mg – if fever develops
- Warm blankets and warm fluids

🛑 Advice:
- Keep warm
- Monitor temperature
- Stay hydrated
- Rest

⚠️ See a doctor if:
- High fever develops
- Chills persist
- Accompanied by other symptoms (cough, pain, etc.)
`;
  }

  // Swelling
  if (msg.includes("swelling") || msg.includes("swollen") || msg.includes("edema") || msg.includes("puffy")) {
    return `
Swelling can have many causes — injury, allergy, kidney, or heart issues.

💊 Suggested medicines:
- Depends on the cause (see below)
- For injury: Ice pack + Ibuprofen 400 mg (after food)
- For allergy: Cetirizine 10 mg

🛑 Advice:
- Elevate the swollen area
- Apply ice if recent injury
- Reduce salt intake
- Stay active, avoid prolonged sitting/standing

⚠️ See a doctor if:
- Sudden swelling of face/lips/tongue (allergy emergency)
- Swelling in one leg only (could be DVT — blood clot)
- Swelling with shortness of breath
- Swelling persists without clear cause
`;
  }

  // Hiccups
  if (msg.includes("hiccup") || msg.includes("hiccups") || msg.includes("hicup")) {
    return `
Hiccups are usually harmless but can be annoying.

💊 Remedies:
- Hold your breath for 10 seconds, then breathe out slowly
- Drink cold water slowly
- Breathe into a paper bag for 30 seconds
- Swallow a teaspoon of sugar
- Pull knees to chest and lean forward

🛑 Advice:
- Eat slowly
- Avoid carbonated drinks
- Avoid overeating

⚠️ See a doctor if:
- Hiccups last more than 48 hours
- Interfere with eating/sleeping
- Associated with other symptoms
`;
  }

  // Urinary Issues / Burning Urination
  if (msg.includes("burning urine") || msg.includes("urine") || msg.includes("urination") || msg.includes("uti") || msg.includes("frequent urine") || msg.includes("painful urination")) {
    return `
This could be a urinary tract infection (UTI).

💊 Suggested medicines:
- Norfloxacin 400 mg – twice daily for 3–5 days (if UTI suspected)
- Citralka (alkalizing syrup) – 2 teaspoons in water, 2–3 times/day
- Plenty of water – at least 3–4 liters/day

🛑 Advice:
- Drink plenty of water (flushes bacteria)
- Don't hold urine — go when you feel the urge
- Urinate before and after intercourse
- Wear cotton underwear
- Avoid caffeine and alcohol
- Cranberry juice may help

⚠️ See a doctor if:
- Blood in urine
- Fever with chills (kidney infection?)
- Flank/lower back pain
- Symptoms don't improve in 2–3 days
- Pregnant women with UTI symptoms
`;
  }

  // Hair Loss
  if (msg.includes("hair loss") || msg.includes("hair fall") || msg.includes("bald") || msg.includes("thinning hair")) {
    return `
Hair loss can be due to stress, deficiency, hormones, or genetics.

💊 Suggested supplements:
- Biotin 10 mg – once daily
- Multivitamin + Iron + Zinc
- Minoxidil 5% topical solution – apply on scalp twice daily (for androgenetic alopecia)

🛑 Advice:
- Balanced diet rich in protein, iron, and vitamins
- Avoid harsh chemicals and heat on hair
- Manage stress
- Gentle hair care (wide-tooth comb, mild shampoo)
- Check thyroid levels
- Get Vitamin D and B12 checked

⚠️ See a dermatologist if:
- Sudden patchy hair loss (alopecia areata)
- Scalp itching, redness, or scaling
- Hair loss with other symptoms (thyroid, PCOS)
`;
  }

  // Weight Loss (Unexplained)
  if (msg.includes("weight loss") || msg.includes("losing weight") || msg.includes("unexplained weight loss")) {
    return `
Unexplained weight loss can be a sign of a serious condition.

💊 No self-medication for this symptom.

🛑 Advice:
- Track your weight weekly
- Maintain a food diary
- Get blood tests done:
  • CBC, Thyroid (TSH), Blood sugar (HbA1c)
  • Vitamin B12, Vitamin D
  • Liver and kidney function

Possible causes:
- Hyperthyroidism
- Diabetes
- Chronic infections (TB)
- Cancer
- Depression/anxiety

⚠️ See a doctor if:
- Lost more than 5% body weight in 6–12 months without trying
- Accompanied by fever, night sweats, or pain
`;
  }

  // Loss of Appetite
  if (msg.includes("appetite") || msg.includes("no appetite") || msg.includes("loss of appetite") || msg.includes("not hungry") || msg.includes("not eating")) {
    return `
Loss of appetite can be due to stress, illness, or deficiency.

💊 Suggested medicines:
- Vitamin B complex syrup – once daily
- Cyproheptadine 4 mg – before meals (for appetite stimulation)
- Small frequent meals

🛑 Advice:
- Eat small, frequent meals instead of 3 large ones
- Include favorite foods
- Stay hydrated
- Light exercise can stimulate appetite
- Avoid drinking fluids before meals
- Manage stress

⚠️ See a doctor if:
- Appetite loss lasts more than 2 weeks
- Unexplained weight loss
- Nausea, vomiting, or pain
`;
  }

  // Sweating (Excessive)
  if (msg.includes("sweating") || msg.includes("excessive sweat") || msg.includes("night sweat") || msg.includes("perspiration")) {
    return `
Excessive sweating can be due to heat, anxiety, thyroid, or infection.

💊 Suggested measures:
- Antiperspirant (aluminum chloride-based)
- Wear loose, cotton clothing
- Talcum powder

🛑 Advice:
- Stay hydrated
- Avoid spicy food and caffeine
- Cool environment
- Manage stress/anxiety

⚠️ See a doctor if:
- Night sweats with weight loss/fever
- Sudden onset of excessive sweating
- Sweating with chest pain (could be heart attack!)
- Cold clammy skin with dizziness
`;
  }

  // Numbness / Tingling
  if (msg.includes("numbness") || msg.includes("tingling") || msg.includes("pins and needles") || msg.includes("numb")) {
    return `
This could be due to nerve compression, vitamin B12 deficiency, or diabetes.

💊 Suggested medicines:
- Vitamin B12 supplement – if deficient
- Pregabalin 75 mg – for nerve pain (prescription)
- Multivitamin with methylcobalamin

🛑 Advice:
- Change positions frequently
- Gentle stretching
- Check blood sugar levels
- Check Vitamin B12 levels
- Avoid prolonged sitting/standing

⚠️ See a doctor URGENTLY if:
- Sudden numbness on one side of body (stroke warning!)
- Numbness with weakness
- Numbness with difficulty speaking
- Numbness spreading rapidly
`;
  }

  // Ringing in Ears (Tinnitus)
  if (msg.includes("ringing ear") || msg.includes("tinnitus") || msg.includes("ringing in ear") || msg.includes("buzzing ear")) {
    return `
This could be tinnitus — often due to loud noise, stress, or ear issues.

💊 Suggested medicines:
- Betahistine (Vertin) 16 mg – 3 times/day (if associated with vertigo)
- Multivitamin with Zinc and Ginkgo Biloba

🛑 Advice:
- Avoid loud noises (use earplugs)
- Reduce caffeine and salt
- Manage stress
- Background noise (fan, soft music) can help
- Don't use cotton swabs in ears

⚠️ See an ENT doctor if:
- Ringing is only in one ear
- Hearing loss accompanies it
- Dizziness/vertigo
- Pulsatile tinnitus (ringing in sync with heartbeat)
`;
  }

  // Blood in Stool
  if (msg.includes("blood in stool") || msg.includes("blood stool") || msg.includes("bloody stool") || msg.includes("rectal bleeding")) {
    return `
⚠️ Blood in stool should NEVER be ignored.

💊 Do NOT self-medicate for this symptom.

Possible causes:
- Piles (hemorrhoids) – most common
- Fissure (tear) – painful
- Polyps
- Inflammatory bowel disease
- Colon cancer (especially if >45 years)

🛑 Advice:
- See a doctor for proper evaluation
- Increase fiber and water intake
- Avoid straining during bowel movements
- Sit in warm water (sitz bath) for relief
- Monitor the amount and color of blood

⚠️ See a doctor URGENTLY if:
- Large amount of blood
- Black/tarry stools
- Dizziness or faintness
- Severe abdominal pain
- Weight loss
`;
  }

  // Blood in Urine
  if (msg.includes("blood in urine") || msg.includes("bloody urine") || msg.includes("hematuria") || msg.includes("red urine")) {
    return `
🚨 Blood in urine needs urgent medical evaluation.

💊 Do NOT self-medicate for this symptom.

Possible causes:
- Urinary tract infection
- Kidney stones
- Bladder/kidney injury
- Kidney disease
- Cancer (especially if painless)

🛑 Advice:
- Drink plenty of water
- See a doctor for urine test and ultrasound
- Avoid strenuous exercise temporarily

⚠️ See a doctor URGENTLY if:
- Blood clots in urine
- Pain in flank/lower back (kidney stones?)
- Fever with chills
- Unable to urinate
`;
  }

  // Menstrual / Period Pain
  if (msg.includes("period pain") || msg.includes("menstrual") || msg.includes("cramps") || msg.includes("period cramp") || msg.includes("dysmenorrhea")) {
    return `
This could be menstrual cramps (dysmenorrhea).

💊 Suggested medicines:
- Ibuprofen 400 mg – every 6–8 hours (start at onset of pain)
- Paracetamol 500 mg – if Ibuprofen not tolerated
- Meftal Spas (Mefenamic acid + Dicyclomine) – for cramps
- Hot water bag on lower abdomen

🛑 Advice:
- Regular exercise helps reduce cramps
- Warm baths
- Reduce caffeine and salt
- Stay hydrated
- Light, nutritious food
- Magnesium-rich foods (bananas, nuts)

⚠️ See a gynecologist if:
- Pain is severe and disrupts daily life
- Heavy bleeding (changing pad every 1–2 hours)
- Pain not relieved by medication
- Irregular periods
- Bleeding between periods
`;
  }

  // Default
  return `
I'm not sure about your symptoms.

⚠️ Please consult a doctor for proper diagnosis.

💡 Tip: Try describing symptoms like:
- "fever with body pain"
- "cough and sore throat"
- "stomach pain with vomiting"
- "headache and dizziness"
- "cold and cough"
- "diarrhea and nausea"
- "chest pain with breathing difficulty"
- "joint pain with swelling"
- "back pain with leg pain"
- "anxiety and insomnia"
- "burning urine"
- "skin rash and itching"
- "constipation"
- "acidity"
- "toothache"
- "ear pain"
- "eye pain"
- "mouth ulcer"
- "hair loss"
- "fatigue"
- "vertigo"
- "nosebleed"
- "burns"
- "cuts"
- "insect bite"
- "period pain"
- "blood in stool"
- "blood in urine"
- "numbness"
- "sweating"
- "hiccups"
`;
};

module.exports = { getResponse };

//  const { getGeminiResponse } = require("./gemini");

// const getResponse = async (message) => {
//   const msg = message.toLowerCase();

//   // ✅ Rule-based quick responses
//   if (msg.includes("fever") && msg.includes("cough")) {
//     return "You may have a viral infection. Stay hydrated, take rest, and consult a doctor if symptoms persist.";
//   }

//   if (msg.includes("fever") && msg.includes("headache")) {
//     return "This could be due to viral fever. Drink fluids and take proper rest.";
//   }

//   if (msg.includes("fever")) {
//     return "You may have a fever. Drink plenty of water and monitor your temperature.";
//   }

//   if (msg.includes("cough")) {
//     return "You may have a cough. Try warm fluids and avoid cold drinks.";
//   }

//   if (msg.includes("headache")) {
//     return "You may have a headache. Rest well and stay hydrated.";
//   }

//   if (msg.includes("stomach pain")) {
//     return "This could be due to indigestion. Avoid oily food and drink water.";
//   }

//   if (msg.includes("cold")) {
//     return "You might have a common cold. Take rest and stay warm.";
//   }

//   // 🤖 Fallback to Gemini AI
//   const aiReply = await getGeminiResponse(
//     `You are a helpful medical assistant. 
//     Give safe, general advice only (no diagnosis).
//     User symptoms: ${message}`
//   );

//   return aiReply;
// };

// module.exports = { getResponse };