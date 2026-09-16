const WHATSAPP_NUMBER="91XXXXXXXXXX";

/* =========================================================
   PRadeep Provision Store — Category / Brand / Product system
   ---------------------------------------------------------
   Flow:
   Categories -> Brand / Variety -> Products
   A product image is matched automatically from images/ when
   the filename is based on the product name (example:
   "Dove Soap.png" -> "Dove Soap" / aliases also supported).
   ========================================================= */

const IMG = {
  "Tedhe Medhe":["images/tedhe-medhe.png"],
  "Frits":["images/crax-fritts.png"],
  "Crax":["images/crax-rings.png"],
  "Chakkar Kate":["images/chakkar-kate.png"],
  "Anpoorna Namkeen":["images/anpoorna-namkeen.png"],
  "Daal - All Types":["images/daal-all-types.png"],
  "Galaxy Rice":["images/galaxy-rice.png"],
  "Lays Chips":["images/lays.png"],
  "Chini":["images/chini.png"],
  "Falato Veg Tasty":["images/falato.png"],
  "Haldiram Namkeens":["images/haldiram.png"],
  "Daal Variety":["images/daal-variety.png"]
};

const IMAGE_ALIASES={
  "Soap - All Types":["Soap-All-Types"],
  "No.1 Soap":["no-1-soap","no1-soap","no-1"],
  "Lifebuoy Soap":["lifebuoy-soap","lifebuoy"],
  "Lux Soap":["lux-soap","lux"],
  "Dettol Soap":["dettol-soap","dettol"],
  "Santoor Soap":["santoor-soap","santoor"],
  "Margo Soap":["margo-soap","margo"],
  "Aasha Soap":["aasha-soap","aasha"],
  "Dove Soap":["dove-soap","dove"],
  "Pears Soap":["pears-soap","pears"],
  "Fena":["fena","fena-detergent"],
  "Ghadi":["ghadi","ghadi-detergent","soap-ghadi"],
  "Vim Bar":["vim-bar","vim"],
  "Nip":["nip","nip-soap"],
  "Rin":["rin","rin-bar"],
  "Green Mehendi":["green-mehendi","mehendi-green"],
  "Black Mehendi":["black-mehendi"],
  "Maroon Mehendi":["maroon-mehendi","mahroon-mehendi"],
  "Streaks":["streaks"],
  "Black Hair Color":["black-hair-color"],
  "Burgundy Color":["burgundy-color","burgunddi-color"],
  "Vaseline":["vaseline"],
  "Bajaj Tel":["images/Bajaj-Tel.png"],
  "Navratna Tel":["navratna-tel","navratan-tel"],
  "Navratna Powder":["navratna-powder","navratan-powder"],
  "Amla Tel":["amla-tel","amla-oil"],
  "Gole Tel":["gole-tel","gole-ka-tel"],
  "Colgate":["colgate"],
  "Closeup":["closeup"],
  "Dant Kanti":["dant-kanti","dhant-kaanti"],
  "Dabur Toothpaste":["dabur-toothpaste","dabur"],
  "Toothbrushes":["toothbrushes","toothbrush"],
  "Razor":["razor","razors"],
  "Beard Cream":["beard-cream","beard-cream"],
  "Whisper":["whisper","whisper-pads"],
  "Pampers":["pampers","pampers-diapers"],
  "Move":["move","move-pain-relief"],
  "Vicks":["vicks","vicks-inhaler","vicks"],
  "Dristi Eye Drop":["dristi-eye-drop","dristi","eye-drop"],
  "Surf Excel":["surf-excel","surfexcel"],
  "Surf":["surf"],
  "Tide":["tide"],
  "Wheel":["wheel"],
  "Rubber Juna":["rubber-juna","rubber-scrubber"],
  "Steel Juna":["steel-juna","steel-scrubber"],
  "Brush - Plastic / Wood":["plastic-wood-brush","brush"],
  "Revive":["revive"],
  "Cluf":["cluf"],
  "MDH":["mdh"],
  "Goldie":["goldie"],
  "Aasha Mirch":["aasha-mirch"],
  "Aasha Haldi":["aasha-haldi"],
  "Aasha Dhaniya":["aasha-dhaniya"],
  "Maggie Masala":["maggie-masala","maggi-masala"],
  "Catch Masale":["catch-masale","catch"],
  "Sabut Mirch":["sabut-mirch"],
  "Sabut Dhaniya":["sabut-dhaniya"],
  "Laung":["laung"],
  "Elaichi":["elaichi"],
  "Sabut Masala":["sabut-masala"],
  "Achar Masala":["achar-masala"],
  "Curry Patta":["curry-patta","curry-leaves"],
  "Heeng":["heeng","hing"],
  "Mario":["mario"],
  "Parle-G":["parle-g","parleg"],
  "Good Day":["good-day"],
  "Butter Bite":["butter-bite"],
  "Magics":["magics"],
  "Tiger":["tiger-biscuits","tiger"],
  "Oreo":["oreo","orer"],
  "Marie Gold":["marie-gold"],
  "Bourbon":["bourbon"],
  "Jim Jam":["jim-jam"],
  "CNC":["cnc"],
  "Bakery Biscuits":["bakery-biscuits"],
  "Jeera Biscuits":["jeera-biscuits"],
  "Daal Sale":["daal-sale","dal-sale"],
  "Bhujiya":["bhujiya"],
  "Paneer Bhujiya":["paneer-bhujiya"],
  "Lite Mixture":["lite-mixture"],
  "Barat Ki Namkeen":["barat-ki-namkeen"],
  "Punjabi Tadka":["punjabi-tadka"],
  "Khatta Meetha":["khatta-meetha"],
  "Moong Dal Namkeen":["moong-dal-namkeen"],
  "Navratna Mixture":["navratna-mixture","navratana"],
  "All In One":["all-in-one"],
  "Chana Mixture":["chana-mixture"],
  "Peanuts":["peanuts"],
  "Nut Cracker":["nut-cracker"],
  "Kaju Mixture":["kaju-mixture"],
  "Panchratan":["panchratan","panch-ratan"],
  "Biryani Packet":["biryani-packet"],
  "Jhaal Muri":["jhaal-muri","jhal-muri"],
  "Katori":["katori"],
  "Galaxy Rice 1st":["galaxy-rice-1st","galaxy-1st"],
  "Galaxy Rice 2nd":["galaxy-rice-2nd","galaxy-2nd"],
  "Poha Packet":["poha-packet","poha"],
  "Fine & Fresh Aata":["fine-and-fresh-aata","fine-fresh-aata","aata"],
  "Maida":["maida"],
  "Rajdhani Besan":["rajdhani-besan","besan"],
  "Kuttu Ka Aata":["kuttu-ka-aata","kuttu-aata"],
  "Singhare Ka Aata":["singhare-ka-aata","singhara-aata"],
  "Sooji":["sooji"],
  "Khane Ka Soda":["khane-ka-soda","cooking-soda"],
  "Kaali Dal":["kaali-dal","kali-dal"],
  "Moong Dal":["moong-dal"],
  "Masoor Dal":["masoor-dal","masri-dal"],
  "Sabut Masoor":["sabut-masoor"],
  "Sabut Moong":["sabut-moong"],
  "Chana Dal":["chana-dal"],
  "Arhar Dal":["arhar-dal","toor-dal"],
  "Rajma":["rajma"],
  "Chhole":["chhole","chole"],
  "Kale Chane":["kale-chane"],
  "Chini":["chini","sugar"],
  "Bura":["bura"],
  "Shakkar":["shakkar"],
  "Gudd":["gudd","gur"],
  "Kaaju":["kaaju","kaju"],
  "Badam":["badam","almonds"],
  "Kishmish":["kishmish","raisins"],
  "Pista":["pista"],
  "Makhane":["makhane","makhana"],
  "Magaj":["magaj"],
  "Chuaare":["chuaare","chuara"],
  "Petha Red":["petha-red"],
  "Petha Green":["petha-green"],
  "Elaichi Dana":["elaichi-dana"],
  "Bhune Chane":["bhune-chane"],
  "Gole Ka Baruda":["gole-ka-baruda"],
  "Mahakosh":["mahakosh"],
  "Fortune Oil":["fortune-oil","fortune"],
  "Sudhansh Oil":["sudhansh-oil","sudhandh-oil","sudhansh"],
  "Refined Oil":["refined-oil","refine-oil"],
  "Raag Ghee":["raag-ghee","raag"],
  "Aash Ghee":["aash-ghee","assh-ghee"],
  "Madhusudhan Ghee":["madhusudhan-ghee","madhusudhan"],
  "Parachute Gole Oil":["parachute-gole-oil","parachute-gole","parachute"],
  "Til Tel":["til-tel","til-ka-tel"],
  "Kissan":["kissan","kissan-sauce"],
  "Tops":["tops"],
  "Maggi":["maggi","maggie"],
  "Yippee":["yippee"],
  "Pasta":["pasta"],
  "Macaroni":["macaroni"],
  "Jave":["jave"],
  "Adrak Paste":["adrak-paste","ginger-paste"],
  "Soya Chunks":["soya-chunks"],
  "Soya Beans":["soya-beans"],
  "Gems":["gems"],
  "Shots":["shots"],
  "Eclairs":["eclairs"],
  "Kacha Aam":["kacha-aam"],
  "Creamfills":["creamfills"],
  "Pulse":["pulse"],
  "Mango Bite":["mango-bite"],
  "Orange Bite":["orange-bite"],
  "Mazelo":["mazelo"],
  "Melody":["melody"],
  "Kissme":["kissme","kiss-me"],
  "Golatoffee":["golatoffee"],
  "Heeng Goli":["heeng-goli"],
  "Dairy Milk":["dairy-milk"],
  "5 Star":["5-star","5star"],
  "Snaker":["snaker","snickers"],
  "Munch":["munch"],
  "Crispello":["crispello"],
  "KitKat":["kitkat","kit-kat"],
  "Fuse":["fuse"],
  "Haridarshan":["haridarshan"],
  "Z Black":["z-black"],
  "Kubair Gold":["kubair-gold","kubera-gold"],
  "Panni Wali":["panni-wali"],
  "Panchwati Agarbatti":["panchwati-agarbatti"],
  "Gol Rui Baati":["gol-rui-baati"],
  "Lambi Rui Baati":["lambi-rui-baati"],
  "Rui":["rui"],
  "Kalawa":["kalawa"],
  "Fevikwik":["fevikwik","feviquick"],
  "Fevicol":["fevicol"],
  "Gum":["gum"],
  "Gond":["gond","goond"],
  "Kaale Til":["kaale-til"],
  "Ludo":["ludo"],
  "Utility Knife":["utility-knife","knife"],
  "Notebooks":["notebooks","notebook"],
  "Files":["files"],
  "Natraj Pencil":["natraj-pencil","pencil"],
  "Doms Pencil":["doms-pencil"],
  "Natraj Eraser":["natraj-eraser","eraser"],
  "Doms Eraser":["doms-eraser"],
  "Natraj Scale":["natraj-scale","scale"],
  "Doms Geometry Box":["doms-geometry-box","geometry-box"],
  "Charts":["charts"],
  "Color Papers":["color-papers","colour-papers"],
  "Brass Paper":["brass-paper"],
  "Polythene Paper":["polythene-paper"],
  "Exam Pad":["exam-pad"],
  "Cap":["cap"],
  "Mombatti":["mombatti","moom-baati","candle"],
  "Balloons":["balloons","balls"],
  "Birthday Title Letters":["birthday-title-letters"],
  "Jhaller":["jhaller"],
  "Dona":["dona"],
  "Pattal":["pattal"],
  "Jhadu - Seekh":["jhadu-seekh","jhadu"],
  "Jhadu - Phool":["jhadu-phool","phool-jhadu"],
  "Wiper":["wiper"],
  "Pochha":["pochha"],
  "Rassi":["rassi"],
  "Bahi":["bahi"],
  "Baan":["baan"],
  "Baansh":["baansh","bansh"],
  "Black Panna":["black-panna"],
  "White Panna":["white-panna"],
  "Tirpaal":["tirpaal","tarpaulin"],
  "Balti":["balti","bucket"],
  "Mug":["mug"],
  "Cow's Naath":["cows-naath","cow-naath","naath"],
  "Jevda":["jevda"],
  "Reel":["reel"],
  "Sui":["sui","needle"],
  "Daimchi":["daimchi"],
  "All Out":["all-out"],
  "Good Knight":["good-night"],
  "Shoe Polish":["shoe-polish","shoes-polish"],
  "Matchsticks":["matchsticks","matchstick"],
  "Baba Elaichi":["baba-elaichi","baba-elachi"],
  "Tojo":["tojo"],
  "Chutki":["chutki"],
  "Center Fresh":["center-fresh","centre-fresh"],
  "Center Fruit":["center-fruit","centre-fruit"],
  "Dilbagh":["dilbagh","dilbag"],
  "Kamla Pasand":["kamla-pasand"],
  "Tansen":["tansen"],
  "Chaini Khaini":["chaini-khaini"],
  "Hathi Gola":["hathi-gola"],
  "Kubair":["kubair"],
  "Safal":["safal"],
  "Mushagul":["mushagul","musha-gul"],
  "Terzen":["terzen","tarjen"],
  "Deluxe Terzen":["deluxe-terzen","delux-terjen"],
  "502 Bidi":["502-bidi","502"],
  "Filter Bidi":["filter-bidi","filter"],
  "Telephone Bidi":["telephone-bidi","telephone"],
  "Nadir Bidi":["nadir-bidi","nadir"],
  "Dholak Bidi":["dholak-bidi","dholak"],
  "27 Bidi":["27-bidi","27"],
  "Gold Flake":["gold-flake","goldflake"],
  "Advance":["advance"],
  "Biscuit - All Types":["biscuits-all-types","biscuits"],
  "Rusk":["rusk"],
  "Dhoop Batti":["dhoop-batti","dhoop-baati"],
  "Agarbatti":["agar-batti","agarbatti"],
  "Saleti":["saleti"],
  "Eno":["eno"],
  "Gasofast":["gasofast"],
  "Condoms":["condoms","manforce"]
};

function normalizeImageName(text){
  return text.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}

function getImageCandidates(productName){
  const candidates = [];

  if(IMG[productName]){
    candidates.push(...IMG[productName]);
  }

  const aliases = IMAGE_ALIASES[productName] || [];

  const names = [
    productName,
    normalizeImageName(productName),
    productName.replace(/\s+/g, "-"),
    productName.replace(/\s+/g, "_"),
    ...aliases
  ];

  names.forEach(name => {
    if(!name) return;

    const clean = String(name).trim();

    ["png","jpg","jpeg","webp"].forEach(ext => {
      const path = `images/${clean}.${ext}`;
      if(!candidates.includes(path)){
        candidates.push(path);
      }
    });
  });

  return [...new Set(candidates)];
}

function imageTagFor(name, alt=name){
  const candidates=getImageCandidates(name);
  const escapedName=String(name).replace(/"/g,"&quot;");
  return `<div class="catalog-media"><img src="${candidates[0]}" data-candidates='${JSON.stringify(candidates).replace(/'/g,"&#39;")}' alt="${String(alt).replace(/"/g,"&quot;")}" onerror="window.swapCatalogImage(this)"><div class="catalog-fallback">🛒</div></div>`;
}

window.swapCatalogImage=function(img){
  let candidates=[];
  try{ candidates=JSON.parse(img.dataset.candidates||"[]"); }catch(_){ candidates=[]; }
  const current=img.dataset.i?Number(img.dataset.i):0;
  const next=current+1;
  if(next<candidates.length){
    img.dataset.i=String(next);
    img.src=candidates[next];
  }else{
    img.style.display="none";
    const fallback=img.parentElement.querySelector(".catalog-fallback");
    if(fallback) fallback.style.display="grid";
    const productFallback=img.parentElement.querySelector(".product-icon.fallback");
    if(productFallback) productFallback.style.display="grid";
  }
};

const data={
  "Personal Care":{
    emoji:"🧴",desc:"Soap, hair care, oral care aur daily personal-use items.",children:{
      "Soaps":{
        emoji:"🧼",desc:"Different soap brands available at the shop.",products:[
          "No.1 Soap","Lifebuoy Soap","Lux Soap","Dettol Soap","Santoor Soap","Margo Soap","Aasha Soap","Dove Soap","Pears Soap"
        ]},
      "Hair Care":{
        emoji:"💇",desc:"Mehendi, hair color, oils aur hair-care items.",products:[
          "Green Mehendi","Black Mehendi","Maroon Mehendi","Streaks","Black Hair Color","Burgundy Color","Vaseline","Bajaj Tel","Navratna Tel","Navratna Powder","Amla Tel","Gole Tel"
        ]},
      "Oral Care & Grooming":{
        emoji:"🪥",desc:"Toothpaste, toothbrush, razor aur beard-care items.",products:[
          "Colgate","Closeup","Dant Kanti","Dabur Toothpaste","Toothbrushes","Razor","Beard Cream"
        ]}
      }
  },
  "Pads & Health":{
    emoji:"🩺",desc:"Personal hygiene, comfort aur basic health essentials.",children:{
      "Hygiene":{emoji:"🧻",desc:"Pads aur diapers.",products:["Whisper","Pampers"]},
      "Health & Relief":{emoji:"💊",desc:"Basic relief products.",products:["Move","Vicks","Dristi Eye Drop"]}
    }
  },
  "Cleaning & Washing":{
    emoji:"🧹",desc:"Washing, cleaning, scrubbers aur household cleaning items.",children:{
      "Detergent & Washing":{emoji:"🧺",desc:"Detergent powders/bars aur washing products.",products:["Ghadi","Surf Excel","Surf","Tide","Fena","Wheel","Vim Bar","Rin"]},
      "Cleaning Tools":{emoji:"🧽",desc:"Juna aur brushes.",products:["Steel Juna","Rubber Juna","Brush - Plastic / Wood","Revive","Cluf"]}
    }
  },
  "Masale & Spices":{
    emoji:"🌶️",desc:"Packed masale, whole spices aur kitchen essentials.",children:{
      "Branded Masale":{emoji:"🧂",desc:"MDH, Goldie, Aasha, Maggie aur Catch.",products:["MDH","Goldie","Aasha Mirch","Aasha Haldi","Aasha Dhaniya","Maggie Masala","Catch Masale"]},
      "Whole Spices & Others":{emoji:"🌿",desc:"Sabut masale aur kitchen spices.",products:["Sabut Mirch","Sabut Dhaniya","Laung","Elaichi","Sabut Masala","Achar Masala","Curry Patta","Heeng"]}
    }
  },
  "Biscuits":{
    emoji:"🍪",desc:"Popular biscuits aur bakery items.",children:{
      "Branded Biscuits":{emoji:"🍪",desc:"Daily-use biscuit brands.",products:["Mario","Parle-G","Good Day","Butter Bite","Magics","Tiger","Oreo","Marie Gold","Bourbon","Jim Jam","CNC"]},
      "Other Biscuits":{emoji:"🥠",desc:"Bakery aur special biscuits.",products:["Bakery Biscuits","Jeera Biscuits","Rusk"]}
    }
  },
  "Namkeen":{
    emoji:"🥨",desc:"Haldiram, Anpoorna aur other namkeen varieties.",children:{
      "Haldiram's":{emoji:"🥜",desc:"Available Haldiram varieties.",products:["Aloo Bhujiya","Punjabi Tadka","Khatta Meetha","Moong Dal Namkeen","Navratna Mixture","All In One","Chana Mixture","Peanuts","Nut Cracker","Kaju Mixture","Panchratan"]},
      "Other Namkeen":{emoji:"🥨",desc:"Anpoorna aur local namkeen varieties.",products:["Anpoorna Namkeen","Daal Sale","Bhujiya","Paneer Bhujiya","Lite Mixture","Barat Ki Namkeen"]}
    }
  },
  "Chips & Snacks":{
    emoji:"🍟",desc:"Chips, namkeen-style snacks aur ready snack packs.",children:{
      "Chips & Packaged Snacks":{emoji:"🍟",desc:"Popular snack packs.",products:["Lays Chips","Tedhe Medhe","Crax","Frits","Chakkar Kate"]},
      "Other Snacks":{emoji:"🥣",desc:"Other snack items.",products:["Biryani Packet","Jhaal Muri","Katori"]}
    }
  },
  "Rice, Poha & Grains":{
    emoji:"🍚",desc:"Rice brands aur poha.",children:{
      "Rice":{emoji:"🍚",desc:"Galaxy rice varieties.",products:["Galaxy Rice 1st","Galaxy Rice 2nd","Galaxy Rice"]},
      "Poha":{emoji:"🌾",desc:"Poha packet.",products:["Poha Packet"]}
    }
  },
  "Aata, Besan & Flour":{
    emoji:"🌾",desc:"Aata, maida, besan aur special vrat flours.",children:{
      "Flour & Besan":{emoji:"🌾",desc:"Daily cooking flours.",products:["Fine & Fresh Aata","Maida","Rajdhani Besan","Sooji","Khane Ka Soda"]},
      "Vrat Flours":{emoji:"🪷",desc:"Special aata varieties.",products:["Kuttu Ka Aata","Singhare Ka Aata"]}
    }
  },
  "Daal & Pulses":{
    emoji:"🫘",desc:"Different daal, rajma aur chane.",children:{
      "Daal":{emoji:"🫘",desc:"Daily cooking dals.",products:["Kaali Dal","Moong Dal","Masoor Dal","Sabut Masoor","Sabut Moong","Chana Dal","Arhar Dal"]},
      "Rajma & Chana":{emoji:"🥣",desc:"Beans and chana varieties.",products:["Rajma","Chhole","Kale Chane"]}
    }
  },
  "Sugar, Dry Fruits & Sweets":{
    emoji:"🥜",desc:"Sugar, gud, dry fruits aur sweet items.",children:{
      "Sugar & Sweeteners":{emoji:"🧂",desc:"Chini, bura, shakkar aur gudd.",products:["Chini","Bura","Shakkar","Gudd"]},
      "Dry Fruits":{emoji:"🥜",desc:"Dry fruits aur nuts.",products:["Kaaju","Badam","Kishmish","Pista","Makhane","Magaj","Chuaare"]},
      "Sweet & Other":{emoji:"🍬",desc:"Petha aur other sweet items.",products:["Petha Red","Petha Green","Elaichi Dana","Bhune Chane","Gole Ka Baruda"]}
    }
  },
  "Oil & Ghee":{
    emoji:"🫗",desc:"Cooking oils, ghee aur speciality oils.",children:{
      "Cooking Oil":{emoji:"🫗",desc:"Oil and refined brands.",products:["Mahakosh","Fortune Oil","Sudhansh Oil","Refined Oil"]},
      "Ghee":{emoji:"🧈",desc:"Available ghee brands.",products:["Raag Ghee","Aash Ghee","Madhusudhan Ghee"]},
      "Speciality Oils":{emoji:"🫒",desc:"Bajaj, amla, parachute aur til tel.",products:["Bajaj Tel","Amla Tel","Parachute Gole Oil","Til Tel"]}
    }
  },
  "Sauces & Instant Food":{
    emoji:"🍝",desc:"Sauces, Maggi, pasta aur cooking helpers.",children:{
      "Sauces":{emoji:"🍅",desc:"Sauce brands.",products:["Kissan","Tops"]},
      "Instant & Dry Food":{emoji:"🍝",desc:"Noodles, pasta aur dry food.",products:["Maggi","Yippee","Pasta","Macaroni","Jave","Adrak Paste","Soya Chunks","Soya Beans"]}
    }
  },
  "Chocolates, Toffees & Mouth Fresheners":{
    emoji:"🍫",desc:"Chocolates, toffees, candy aur mouth fresheners.",children:{
      "Toffees & Candy":{emoji:"🍬",desc:"Daily counter candies.",products:["Eclairs","Kacha Aam","Creamfills","Pulse","Mango Bite","Orange Bite","Mazelo","Melody","Kissme","Golatoffee","Vicks Candy","Satmola Candy","Heeng Goli"]},
      "Chocolates":{emoji:"🍫",desc:"Chocolate brands.",products:["Dairy Milk","5 Star","Snaker","Munch","Crispello","Nestle Chocolate","KitKat","Fuse","Gems","Shots"]},
      "Mouth Freshener":{emoji:"🌿",desc:"Elaichi aur freshener items.",products:["Baba Elaichi","Satmola","Tojo","Chutki","Center Fresh","Center Fruit"]}
    }
  },
  "Pooja & Utility":{
    emoji:"🪔",desc:"Dhoop, agarbatti, glue, thread aur utility items.",children:{
      "Pooja Items":{emoji:"🪔",desc:"Dhoop, agarbatti aur baati.",products:["Haridarshan","Z Black","Kubair Gold","Panni Wali","Panchwati Agarbatti","Gol Rui Baati","Lambi Rui Baati","Rui","Kalawa"]},
      "Repair & Utility":{emoji:"🛠️",desc:"Glue, gum aur small utility items.",products:["Fevikwik","Fevicol","Gum","Gond","Kaale Til","Ludo","Utility Knife"]}
    }
  },
  "Stationery":{
    emoji:"📚",desc:"School and office stationery.",children:{
      "Writing & Basics":{emoji:"✏️",desc:"Notebook, pencil, eraser aur scale.",products:["Notebooks","Files","Natraj Pencil","Doms Pencil","Natraj Eraser","Doms Eraser","Natraj Scale"]},
      "School Supplies":{emoji:"📐",desc:"Geometry box, charts aur paper.",products:["Doms Geometry Box","Charts","Color Papers","Brass Paper","Polythene Paper","Exam Pad"]}
    }
  },
  "Birthday & Celebration":{
    emoji:"🎉",desc:"Birthday aur celebration items.",children:{
      "Party Items":{emoji:"🎈",desc:"Simple birthday essentials.",products:["Cap","Mombatti","Balloons","Birthday Title Letters","Jhaller"]}
    }
  },
  "Household & Daily Use":{
    emoji:"🏠",desc:"Dona, pattal, cleaning tools aur daily household items.",children:{
      "Cleaning & Utility":{emoji:"🧹",desc:"Jhadu, wiper, pochha aur ropes.",products:["Dona","Pattal","Jhadu - Seekh","Jhadu - Phool","Wiper","Pochha","Rassi","Bahi","Baan","Baansh"]},
      "Home & Miscellaneous":{emoji:"🪣",desc:"Panna, tarpaal, buckets aur utility items.",products:["Black Panna","White Panna","Tirpaal","Balti","Mug","Cow's Naath","Jevda","Kalawa","Reel","Sui","Daimchi"]},
      "Electrical & Personal Utility":{emoji:"🔌",desc:"Mosquito control and shoe polish.",products:["All Out","Good Knight","Shoe Polish","Matchsticks"]}
    }
  },
  "Paan, Tobacco & Smoking":{
    emoji:"📦",desc:"Shop par available paan/tobacco and smoking products.",children:{
      "Paan / Tobacco":{emoji:"📦",desc:"Available tobacco products.",products:["Dilbagh","Kamla Pasand","Tansen","Chaini Khaini","Hathi Gola","Kubair","Safal","Mushagul"]},
      "Bidi":{emoji:"📦",desc:"Bidi bundle varieties.",products:["Terzen","Deluxe Terzen","502 Bidi","Filter Bidi","Telephone Bidi","Nadir Bidi","Dholak Bidi","27 Bidi"]},
      "Cigarettes":{emoji:"🚬",desc:"Available cigarette brands.",products:["Gold Flake","Advance"]}
    }
  }
};

const productMeta={
  "Lays Chips":["₹5 se • ₹10 / ₹20 / ₹50 / ₹60 / ₹100 packs","Lays","🥔"],
  "Tedhe Medhe":["₹5 se • pack size ke hisaab se","","🥨"],
  "Crax":["₹5 se • pack size ke hisaab se","Crax","🥨"],
  "Frits":["₹5 se • pack size ke hisaab se","Frits","🍟"],
  "Chakkar Kate":["₹5 se • pack size ke hisaab se","","🥨"],
  "Biryani Packet":["Shop par price","","🍚"],
  "Haldiram Namkeens":["₹5 / ₹10 / ₹50 / ₹60 / ₹100 packs","Haldiram","🥜"],
  "Anpoorna Namkeen":["₹5 se • pack size ke hisaab se","Anpoorna","🥜"],
  "Galaxy Rice":["Shop par price • quantity ke hisaab se","Galaxy","🍚"],
  "Chini":["₹55 / kg","","🧂"],
  "Bura":["₹55 / kg","","🧂"],
  "Rajdhani Besan":["₹100 / kg","Rajdhani","🌾"],
  "Fine & Fresh Aata":["10 kg ₹350","Fine & Fresh","🌾"],
  "Madhusudhan Ghee":["Shop par price • pack size ke hisaab se","Madhusudhan","🧈"],
  "Aash Ghee":["Shop par price • pack size ke hisaab se","Aash","🧈"],
  "Refined Oil":["Shop par price • pack size ke hisaab se","","🫗"],
  "Surf Excel":["₹10 se • pack size ke hisaab se","Surf Excel","🧺"],
  "Dilbagh":["₹5 se • bundle/pack size ke hisaab se","Dilbagh","📦"]
};

Object.entries(data).forEach(([category,c])=>{
  Object.entries(c.children).forEach(([child,obj])=>{
    obj.products=obj.products.map(name=>({name,...(productMeta[name]||["Shop par price","","🛒"])}));
  });
});


/* Normalize saved product names for the catalog engine.
   The master catalog stores product names as strings; the UI expects
   name/price/brand fields (and legacy numeric indexes). Keep the master
   list untouched and adapt it here. */
Object.values(data).forEach(category=>{
  Object.values(category.children).forEach(child=>{
    child.products = child.products.map(p => {
      if (typeof p === "string") {
        return { name: p, 1: "Shop par price", 2: "" };
      }
      return p;
    });
  });
});

const categoryAliases={
  "Soaps":"Soap - All Types",
  "Haldiram's":"Haldiram Namkeens",
  "Other Namkeen":"Anpoorna Namkeen",
  "Rice":"Galaxy Rice",
  "Detergent & Washing":"Surf - Tide"
};

const categories=Object.entries(data).map(([name,c])=>[name,c.emoji,c.desc]);
let cart=JSON.parse(localStorage.getItem("pradeepCart")||"{}");
const categoryGrid=document.getElementById("categoryGrid");
const categoryFilter=document.getElementById("categoryFilter");
const productGrid=document.getElementById("productGrid");
const searchInput=document.getElementById("searchInput");
const noProducts=document.getElementById("noProducts");
const cartCount=document.getElementById("cartCount");
const productsSection=document.getElementById("products");

/* Category cards on the home page */
categories.forEach(([name,emoji,desc])=>{
  const card=document.createElement("button");
  card.className="category-card catalog-category-card";
  card.innerHTML=`<div class="emoji">${emoji}</div><h3>${name}</h3><p>${desc}</p><span class="category-link">Browse →</span>`;
  card.onclick=()=>openCatalog(name,null);
  categoryGrid.appendChild(card);
  const o=document.createElement("option");o.value=name;o.textContent=name;categoryFilter.appendChild(o);
});

function slugify(s){return normalizeImageName(s);}
function getNode(category,child){return data[category]&&child?data[category].children[child]:null;}
function getProductList(category,child){return getNode(category,child)?.products||[];}
function productImageCandidates(product){
  const names=[product.name];
  const alias=categoryAliases[product.name];
  if(alias) names.push(alias);
  let out=[];
  names.forEach(n=>{out=out.concat(getImageCandidates(n));});
  return [...new Set(out)];
}
function imageHTML(product){
  let imagePath = "";

  if(product.name === "Bajaj Tel"){
    imagePath = "images/Bajaj-Tel.png";
  }

  if(imagePath){
    return `
      <div class="product-media">
        <img src="${imagePath}" alt="${product.name}">
      </div>
    `;
  }

  return `
    <div class="product-media">
      <div class="product-icon fallback"></div>
    </div>
  `;
}
function productCard(product){
  const pseudoIndex=encodeURIComponent(product.name);
  const article=document.createElement("article");
  article.className="product-card modern-product-card";
  article.innerHTML=`${imageHTML(product)}<div class="product-body"><h3>${product.name}</h3><div class="brand">${product[2]||"Available at shop"}</div><div class="price">${product[1]}</div><button class="add">+ Add to Order</button></div>`;
  article.querySelector(".add").onclick=()=>addNamedToCart(product.name);
  return article;
}

function browseCard(title,desc,emoji,onClick,imageName){
  const card=document.createElement("button");
  card.className="browse-card";
  const imgCandidates=imageName?getImageCandidates(imageName):[];
  const img=imgCandidates.length?`<img src="${imgCandidates[0]}" data-candidates='${JSON.stringify(imgCandidates).replace(/'/g,"&#39;")}' alt="${title}" onerror="window.swapCatalogImage(this)">`:'';
  card.innerHTML=`<div class="browse-media">${img}<span class="browse-emoji">${emoji}</span></div><div class="browse-copy"><h3>${title}</h3><p>${desc}</p><span>Open →</span></div>`;
  if(img) { const pic=card.querySelector(".browse-media img"); pic.addEventListener("error",()=>{pic.style.display="none";card.querySelector(".browse-emoji").style.display="grid";},{once:true}); }
  card.onclick=onClick;
  return card;
}

function setBrowseState(category=null,child=null,search=""){
  const state={category,child,search};
  history.pushState(state,"",state.category?`#products/${slugify(state.category)}${state.child?`/${slugify(state.child)}`:""}`:"#products");
}

function openCatalog(category,child,options={push:true}){
  if(options.push) setBrowseState(category,child,options.search||"");
  searchInput.value="";
  categoryFilter.value=category||"all";
  renderCatalog(category,child);
  productsSection.scrollIntoView({behavior:"smooth",block:"start"});
}

function renderCatalog(category,child){
  productGrid.innerHTML="";
  noProducts.classList.add("hidden");
  const heading=document.querySelector(".product-heading h2");
  const sub=document.querySelector(".product-heading .catalog-intro");
  const title=document.querySelector(".catalog-title-area");

  let crumb="All Categories";
  if(category) crumb=category;
  if(child) crumb += `  /  ${child}`;
  document.getElementById("catalogBreadcrumb").innerHTML=category?`<button data-back="home">Home</button><span>›</span><button data-back="category">${category}</button>${child?`<span>›</span><strong>${child}</strong>`:`<strong>Browse</strong>`}`:`<button data-back="home">Home</button><strong>All Categories</strong>`;
  document.querySelectorAll("#catalogBreadcrumb button").forEach(btn=>btn.onclick=()=>{
    if(btn.dataset.back==="home") openCatalog(null,null);
    else openCatalog(category,null);
  });

  if(!category){
    // Default view: show the actual product cards directly, like the user's reference screenshot.
    heading.textContent="Store ke products";
    sub.textContent="Shop ke available products browse karein. Search se product jaldi dhoondh sakte hain.";
    productGrid.className="product-grid catalog-grid";
    const allProducts=[];
    Object.entries(data).forEach(([catName,c])=>{
      Object.entries(c.children).forEach(([variety,obj])=>{
        obj.products.forEach(p=>allProducts.push({...p, _category:catName, _variety:variety}));
      });
    });
    const q=searchInput.value.trim().toLowerCase();
    const items=q?allProducts.filter(p=>(p.name+" "+(p[2]||"")+" "+p._category+" "+p._variety).toLowerCase().includes(q)):allProducts;
    items.forEach(p=>productGrid.appendChild(productCard(p)));
    noProducts.classList.toggle("hidden",items.length>0);
    return;
  }

  const c=data[category];
  if(!child){
    // Category click: immediately show all products/brands in that category.
    heading.textContent=category;
    sub.textContent=c.desc+" Available products / brands neeche dikh rahe hain.";
    productGrid.className="product-grid catalog-grid";
    const items=[];
    Object.entries(c.children).forEach(([variety,obj])=>{
      obj.products.forEach(p=>items.push({...p, _category:category, _variety:variety}));
    });
    const q=searchInput.value.trim().toLowerCase();
    const filtered=q?items.filter(p=>(p.name+" "+(p[2]||"")+" "+p._variety).toLowerCase().includes(q)):items;
    filtered.forEach(p=>productGrid.appendChild(productCard(p)));
    noProducts.classList.toggle("hidden",filtered.length>0);
    return;
  }

  const node=c.children[child];
  if(!node) return openCatalog(category,null,{push:false});
  heading.textContent=child;
  sub.textContent=node.desc+" Product par click karke order list mein add karo.";
  productGrid.className="product-grid catalog-grid";
  const q=searchInput.value.trim().toLowerCase();
  const items=node.products.filter(p=>(p.name+" "+p[2]).toLowerCase().includes(q));
  items.forEach(p=>productGrid.appendChild(productCard(p)));
  noProducts.classList.toggle("hidden",items.length>0);
}

function currentStateFromHash(){
  const parts=location.hash.replace(/^#products\/?/,"").split("/").filter(Boolean).map(decodeURIComponent);
  if(!location.hash.startsWith("#products")) return {category:null,child:null};
  const category=Object.keys(data).find(x=>slugify(x)===parts[0]);
  const child=category?Object.keys(data[category].children).find(x=>slugify(x)===parts[1]):null;
  return {category:category||null,child:child||null};
}

window.addEventListener("popstate",()=>{const s=history.state||currentStateFromHash();openCatalog(s.category||null,s.child||null,{push:false});});

function namedProductKey(name){
  const all=[];
  Object.values(data).forEach(c=>Object.values(c.children).forEach(ch=>ch.products.forEach(p=>all.push(p.name))));
  return all.indexOf(name);
}

const cartProducts=[];
Object.values(data).forEach(c=>Object.values(c.children).forEach(ch=>ch.products.forEach(p=>{if(!cartProducts.some(x=>x.name===p.name)) cartProducts.push(p);}))); 
function addNamedToCart(name){
  const i=namedProductKey(name);
  if(i<0) return;
  cart[i]=(cart[i]||0)+1;
  save();updateCount();
  showToast(`${name} order list mein add ho gaya ✓`);
}
function save(){localStorage.setItem("pradeepCart",JSON.stringify(cart));}
function updateCount(){cartCount.textContent=Object.values(cart).reduce((a,b)=>a+b,0);}
function renderCart(){
  const box=document.getElementById("cartItems"),entries=Object.entries(cart);
  box.innerHTML="";
  if(!entries.length){box.innerHTML='<p class="empty">Cart abhi empty hai. Products se items add karein.</p>';document.getElementById("cartTotal").textContent="₹0";return;}
  let total=0,unknown=false;
  entries.forEach(([i,q])=>{
    const p=cartProducts[+i]; if(!p)return;
    const m=p[1].match(/₹\s*(\d+)/);
    if(m && !/se|shop|size|pack|kg/i.test(p[1])) total+=+m[1]*q; else unknown=true;
    const row=document.createElement("div");row.className="cart-row";
    row.innerHTML=`<div><b>${p.name}</b><br><small>${p[1]}</small></div><div class="qty"><button>−</button><b>${q}</b><button>+</button></div><button class="remove">Remove</button>`;
    row.children[1].children[0].onclick=()=>change(i,-1);
    row.children[1].children[2].onclick=()=>change(i,1);
    row.querySelector(".remove").onclick=()=>{delete cart[i];save();updateCount();renderCart();};
    box.appendChild(row);
  });
  document.getElementById("cartTotal").textContent=unknown?"Shop par confirm hoga":`₹${total}`;
}
function change(i,d){cart[i]=(cart[i]||0)+d;if(cart[i]<=0)delete cart[i];save();updateCount();renderCart();}
function openCart(){document.getElementById("cartOverlay").classList.remove("hidden");renderCart();}
document.getElementById("openCartBtn").onclick=openCart;
document.getElementById("openCartBtn2").onclick=openCart;
document.getElementById("closeCartBtn").onclick=()=>document.getElementById("cartOverlay").classList.add("hidden");
document.getElementById("cartOverlay").onclick=e=>{if(e.target.id==="cartOverlay")e.currentTarget.classList.add("hidden")};
document.getElementById("clearCartBtn").onclick=()=>{cart={};save();updateCount();renderCart()};
document.getElementById("whatsappBtn").onclick=()=>{
  if(!Object.keys(cart).length)return alert("Pehle products cart mein add karein.");
  if(WHATSAPP_NUMBER.includes("X"))return alert("script.js mein WHATSAPP_NUMBER mein papa ka WhatsApp number add karein.");
  const lines=Object.entries(cart).map(([i,q])=>{const p=cartProducts[+i];return `• ${p.name} × ${q}`;});
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Namaste Pradeep Provision Store,\n\nMujhe ye saman ready karwana hai:\n"+lines.join("\n")+"\n\nMain shop se pickup kar lunga.")}`,"_blank");
};

searchInput.oninput=()=>{const s=currentStateFromHash();if(s.category&&s.child)renderCatalog(s.category,s.child);};
categoryFilter.onchange=()=>{if(categoryFilter.value==="all")openCatalog(null,null);else openCatalog(categoryFilter.value,null);};
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuBtn").onclick=()=>document.getElementById("navLinks").classList.toggle("open");
document.querySelectorAll("#navLinks a").forEach(a=>a.onclick=()=>document.getElementById("navLinks").classList.remove("open"));

document.querySelector('a[href="#products"]').onclick=e=>{e.preventDefault();openCatalog(null,null);};

function showToast(message){
  let toast=document.getElementById("toast");
  if(!toast){toast=document.createElement("div");toast.id="toast";document.body.appendChild(toast);}
  toast.textContent=message;toast.classList.add("show");clearTimeout(window.pradeepToastTimer);
  window.pradeepToastTimer=setTimeout(()=>toast.classList.remove("show"),2000);
}

/* Legacy/current product filter now points to the new catalog. */
const initial=currentStateFromHash();
renderCatalog(initial.category,initial.child);
updateCount();
