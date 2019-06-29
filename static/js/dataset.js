function map() { //Creation of the map and some settings
var mapid=document.getElementById("mapid");
var mymap = L.map(mapid).setView([52.2530209, 20.8720279], 6);
var dataset = { //Created Geojson
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Jawor - Ko\u015bci\u00f3\u0142 ewangelicko-augsburski pw. Ducha \u015awi\u0119tego, zwany Ko\u015bcio\u0142em Pokoju",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "0.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.1886179516821,
          51.0542081660356
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "1.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.7591382417552,
          50.8920518107626
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "2.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.6815939315097,
          50.8622538808433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "3.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8101154071238,
          50.8056850412282
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "4.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8305506703143,
          50.8700083767119
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "5.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8122310908847,
          50.8300435217117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "6.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8488791065956,
          50.8443772737382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "7.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8527047796441,
          50.8541866448912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "8.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8119148066743,
          50.8736107056179
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "9.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.7815375033392,
          50.8429901416618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "10.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.8147261929624,
          50.8739894703023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pa\u0142ace i parki krajobrazowe Kotliny Jeleniog\u00f3rskiej",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2011-09-20",
        "image_paths": "11.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.7338144349718,
          50.8404570093339
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Krzesz\u00f3w - opactwo cysters\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2004-04-14",
        "image_paths": "12.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.057559490746,
          50.7334276588202
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Duszniki Zdr\u00f3j - m\u0142yn papierniczy",
        "type": "zabytek techniki",
        "date_of_entry": "2011-09-20",
        "image_paths": "13.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.3952776412747,
          50.4043536296465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Legnickie Pole - pobenedykty\u0144ski zesp\u00f3\u0142 klasztorny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2004-04-14",
        "image_paths": "14.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.2439202963398,
          51.1454140731302
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Strzegom - ko\u015bci\u00f3\u0142 pod wezwaniem \u015bw. \u015bw. Aposto\u0142\u00f3w Piotra i Paw\u0142a",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2012-10-22",
        "image_paths": "15.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.3496450905963,
          50.9591725244255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u015awidnica - Katedra pw. \u015bw. Stanis\u0142awa Biskupa i M\u0119czennika i \u015bw. Wac\u0142awa M\u0119czennika",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "16.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.4914684597348,
          50.8407816725118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u015awidnica - zesp\u00f3\u0142 Ko\u015bcio\u0142a ewangelicko-augsburskiego pw. \u015awi\u0119tej Tr\u00f3jcy, zwanego Ko\u015bcio\u0142em Pokoju.",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "17.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.4913819452811,
          50.846428873588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Trzebnica - zesp\u00f3\u0142 dawnego opactwa cysterek",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2014-07-21",
        "image_paths": "18.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0676413630765,
          51.3088077917829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wroc\u0142aw - Hala Stulecia",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2005-04-13",
        "image_paths": "19.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0782129359636,
          51.1085897374885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wroc\u0142aw - zesp\u00f3\u0142 historycznego centrum",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "20.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0364792930232,
          51.1107651466421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Twierdza Srebrnog\u00f3rska - nowo\u017cytna warownia g\u00f3rska z XVIII wieku",
        "type": "budownictwo obronne",
        "date_of_entry": "2004-04-14",
        "image_paths": "21.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.6408985140465,
          50.5761278541425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ciechocinek - zesp\u00f3\u0142 t\u0119\u017cni i warzelni soli wraz z parkiem t\u0119\u017cniowym i zdrojowym",
        "type": "zabytek techniki",
        "date_of_entry": "2017-11-22",
        "image_paths": "22.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.7904579244818,
          52.8859440430575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Che\u0142mno - Stare Miasto",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2005-04-13",
        "image_paths": "23.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.4231076042549,
          53.3491694715176
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Grudzi\u0105dz - zesp\u00f3\u0142 zabytkowych spichlerzy wraz z panoram\u0105 od strony Wis\u0142y",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2017-11-22",
        "image_paths": "24.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.7456733862556,
          53.4928613688121
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Strzelno - zesp\u00f3\u0142 dawnego klasztoru norbertanek",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2018-04-20",
        "image_paths": "25.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.1800616141373,
          52.6298918036555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Toru\u0144 - Stare i Nowe Miasto",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "26.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6067043244263,
          53.0103594559677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rezerwat archeologiczny Biskupin",
        "type": "zabytek archeologiczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "27.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.7462193324495,
          52.7861331438644
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Jan\u00f3w Podlaski - stadnina koni",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2017-11-22",
        "image_paths": "28.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.2335756873823,
          52.2095511542212
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Koz\u0142\u00f3wka - zesp\u00f3\u0142 pa\u0142acowo-parkowy",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2007-04-25",
        "image_paths": "29.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.4896697947362,
          51.4598140407906
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lublin - historyczny zesp\u00f3\u0142 architektoniczno-urbanistyczny",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2007-04-25",
        "image_paths": "30.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.5670825408755,
          51.2476228712514
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kazimierz Dolny",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "31.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.9400498998301,
          51.3201773898343
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Zamo\u015b\u0107 - historyczny zesp\u00f3\u0142 miasta w zasi\u0119gu obwarowa\u0144 XIX wieku",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "32.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.2519208965674,
          50.7162591938858
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Go\u015bcikowo-Parady\u017c - pocysterski zesp\u00f3\u0142 klasztorny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-11-22",
        "image_paths": "33.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.5428076725236,
          52.3377208734528
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kl\u0119psk - Ko\u015bci\u00f3\u0142 pw. Nawiedzenia Naj\u015bwi\u0119tszej Maryi Panny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "34.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.7182040722068,
          52.1159742246231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u017baga\u0144 - poaugustia\u0144ski zesp\u00f3\u0142 klasztorny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2011-02-28",
        "image_paths": "35.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.3188233709547,
          51.6162799010615
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Park Mu\u017cakowski w \u0141\u0119knicy - park w stylu krajobrazowym",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2004-04-14",
        "image_paths": "36.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.736989503465,
          51.5545166677086
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u0141owicz - Bazylika Katedralna (dawna Kolegiata Prymasowska) pod wezwaniem Wniebowzi\u0119cia Naj\u015bwi\u0119tszej Marii Panny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2012-10-22",
        "image_paths": "37.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.9438137376148,
          52.1078983508225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Niebor\u00f3w i Arkadia - zesp\u00f3\u0142 pa\u0142acowo-ogrodowy i ogr\u00f3d sentymentalno-romantyczny",
        "type": "zabytkowy park i ogr\u00f3d",
        "date_of_entry": "2017-11-22",
        "image_paths": "38.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.0436843618129,
          52.0747202599685
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u0141\u00f3d\u017a - wielokulturowy krajobraz miasta przemys\u0142owego",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2015-02-16",
        "image_paths": "39.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.4591073811613,
          51.7696688542796
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sulej\u00f3w - zesp\u00f3\u0142 opactwa cysters\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2012-11-13",
        "image_paths": "40.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.8788585246952,
          51.3642771925114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bochnia - kopalnia soli",
        "type": "zabytek techniki",
        "date_of_entry": "2000-09-26",
        "image_paths": "41.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.4215315722133,
          49.9698964226093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Szalowa - ko\u015bci\u00f3\u0142 parafialny pod wezwaniem \u015bw. Micha\u0142a Archanio\u0142a",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-11-22",
        "image_paths": "42.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.0221128903539,
          49.6822266869458
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tyniec - zesp\u00f3\u0142 opactwa Benedyktyn\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "43.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.8033810365856,
          50.0186019736038
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Krak\u00f3w - historyczny zesp\u00f3\u0142 miasta",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "44.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.9429008800381,
          50.054549507126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Krak\u00f3w - Kopiec Ko\u015bciuszki z otoczeniem",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2017-11-22",
        "image_paths": "45.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.8992061746149,
          50.0552093742382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rac\u0142awice - teren historycznej Bitwy Rac\u0142awickiej",
        "type": "pole bitwy",
        "date_of_entry": "2004-04-14",
        "image_paths": "46.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.2216119870691,
          50.3102241654784
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kalwaria Zebrzydowska - krajobrazowy zesp\u00f3\u0142 manierystycznego parku pielgrzymkowego",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2000-10-30",
        "image_paths": "47.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.6829988681032,
          49.8534624375852
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Wieliczka - kopalnia soli",
        "type": "zabytek techniki",
        "date_of_entry": "1994-09-08",
        "image_paths": "48.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.0584976358327,
          49.9808809416678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "P\u0142ock - Wzg\u00f3rze Tumskie",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2018-04-20",
        "image_paths": "49.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.6893030584383,
          52.5405645231311
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Warszawa - Zesp\u00f3\u0142 Stacji Filtr\u00f3w Williama Lindleya",
        "type": "zabytek techniki",
        "date_of_entry": "2012-01-04",
        "image_paths": "50.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.9950923099807,
          52.2213199359631
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Warszawa - historyczny zesp\u00f3\u0142 miasta z traktem kr\u00f3lewskim i Wilanowem",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "51.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.0504758645758,
          52.2151324687242
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Warszawa - zesp\u00f3\u0142 zabytkowych cmentarzy wyznaniowych na Pow\u0105zkach",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2014-07-21",
        "image_paths": "52.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.9723178743421,
          52.2469411002067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u017byrard\u00f3w - XIX-wieczna Osada Fabryczna",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2012-01-04",
        "image_paths": "53.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.4361455455906,
          52.0559851080173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Nysa - zesp\u00f3\u0142 ko\u015bcio\u0142a farnego pod wezwaniem \u015bw. Jakuba Starszego Aposto\u0142a i \u015bw. Agnieszki Dziewicy i M\u0119czennicy",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2011-02-28",
        "image_paths": "54.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.3346040958319,
          50.4746523585375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Paczk\u00f3w - zesp\u00f3\u0142 staromiejski ze \u015bredniowiecznym systemem fortyfikacji",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2012-10-22",
        "image_paths": "55.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0065729167334,
          50.4639675573177
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ozimek - \u017celazny \u0142a\u0144cuchowy most wisz\u0105cy na rzece Ma\u0142a Panew",
        "type": "zabytek techniki",
        "date_of_entry": "2017-03-15",
        "image_paths": "56.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.2122610300796,
          50.6763757132756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "G\u00f3ra \u015awi\u0119tej Anny - komponowany krajobraz kulturowo-przyrodniczy",
        "type": "krajobraz kulturowy",
        "date_of_entry": "2004-04-14",
        "image_paths": "57.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.177519514687,
          50.4474065614399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Le\u017cajsk - zesp\u00f3\u0142 klasztoru o.o. Benedyktyn\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2005-04-13",
        "image_paths": "58.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.4094645374532,
          50.2703259698259
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Radru\u017c - zesp\u00f3\u0142 cerkiewny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-11-22",
        "image_paths": "59.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.4025231911359,
          50.1769753729328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u0141a\u0144cut - zesp\u00f3\u0142 zamkowo-parkowy",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2005-08-25",
        "image_paths": "60.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.2381797752749,
          50.0684461243934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Krasiczyn - zesp\u00f3\u0142 zamkowo-parkowy",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2018-04-20",
        "image_paths": "61.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          22.6494523751649,
          49.7751901976152
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kana\u0142 Augustowski",
        "type": "zabytek techniki",
        "date_of_entry": "2007-04-25",
        "image_paths": "62.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.2024684456133,
          53.7735870878912
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bohoniki i Kruszyniany - meczety i mizary",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2012-11-20",
        "image_paths": "63.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.8161147799549,
          53.1773663859438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Bohoniki i Kruszyniany - meczety i mizary",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2012-11-20",
        "image_paths": "64.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          23.5937074694638,
          53.3946374562477
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pole Bitwy na Westerplatte",
        "type": "pole bitwy",
        "date_of_entry": "2003-08-22",
        "image_paths": "65.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6724050118229,
          54.408067632828
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gda\u0144sk-Oliwa - zesp\u00f3\u0142 pocystersko-katedralny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-11-22",
        "image_paths": "66.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.5612656432293,
          54.4109354463602
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gda\u0144sk - miasto w zasi\u0119gu obwarowa\u0144 XVII w.",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "67.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6509251554087,
          54.3470734896434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gda\u0144sk - Twierdza Wis\u0142ouj\u015bcie",
        "type": "budownictwo obronne",
        "date_of_entry": "2018-04-20",
        "image_paths": "68.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.6795362270855,
          54.394905557535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gdynia - historyczny uk\u0142ad urbanistyczny",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2015-03-17",
        "image_paths": "69.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.5442944018177,
          54.5171037869381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kwidzyn - zesp\u00f3\u0142 katedralno-zamkowy",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2018-04-20",
        "image_paths": "70.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.9202040520865,
          53.7366950326897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Malbork - zesp\u00f3\u0142 zamku krzy\u017cackiego",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "1994-09-08",
        "image_paths": "71.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.0302002872163,
          54.0412810017818
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pelplin - zesp\u00f3\u0142 pocystersko-katedralny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2014-04-25",
        "image_paths": "72.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.693595919651,
          53.9268393399496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Cz\u0119stochowa - Jasna G\u00f3ra - zesp\u00f3\u0142 klasztoru oo. Paulin\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "1994-09-08",
        "image_paths": "73.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.0990880393457,
          50.812412806722
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gliwice - radiostacja",
        "type": "zabytek techniki",
        "date_of_entry": "2017-03-15",
        "image_paths": "74.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.689224136533,
          50.3130439185681
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Katowice - Gmach Wojew\u00f3dztwa i Sejmu \u015al\u0105skiego i zesp\u00f3\u0142 katedralny",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2012-11-13",
        "image_paths": "75.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.0219395633481,
          50.2518852528692
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Katowice - osiedle robotnicze Nikiszowiec",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2011-01-14",
        "image_paths": "76.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.0822220812236,
          50.2427822552635
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Tarnowskie G\u00f3ry - podziemia zabytkowej kopalni rud srebrnono\u015bnych oraz sztolni \"Czarnego Pstr\u0105ga\"",
        "type": "zabytek techniki",
        "date_of_entry": "2004-04-14",
        "image_paths": "77.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          18.8248359418859,
          50.4364509444009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kielce - dawny pa\u0142ac biskup\u00f3w i katedra",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2017-11-22",
        "image_paths": "78.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.6275240371876,
          50.869120741196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u015awi\u0119ty Krzy\u017c - pobenedykty\u0144ski zesp\u00f3\u0142 klasztorny oraz przedchrze\u015bcija\u0144skie obwa\u0142owania kamienne na \u0141ysej G\u00f3rze",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "79.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.0559261688387,
          50.8596516244117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ujazd - ruiny zamku Krzy\u017ctop\u00f3r",
        "type": "dzie\u0142o architektury i budownictwa",
        "date_of_entry": "2018-04-20",
        "image_paths": "80.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.3103371241532,
          50.7140635046643
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Krzemionki - kopalnie krzemienia z okresu neolitu",
        "type": "zabytek archeologiczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "81.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.5010687366643,
          50.9697319463309
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Sandomierz - historyczny zesp\u00f3\u0142 architektoniczno-krajobrazowy",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2017-11-22",
        "image_paths": "82.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.7461679293544,
          50.6805770616583
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "W\u0105chock - zesp\u00f3\u0142 opactwa Cysters\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2017-03-15",
        "image_paths": "83.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.0162500755516,
          51.0750042425159
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Frombork - zesp\u00f3\u0142 katedralny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "1994-09-08",
        "image_paths": "84.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.6818254502616,
          54.3568090528845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kana\u0142 Elbl\u0105ski",
        "type": "zabytek techniki",
        "date_of_entry": "2011-01-14",
        "image_paths": "85.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          19.7373556299449,
          53.9210771211033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "\u015awi\u0119ta Lipka - sanktuarium pielgrzymkowe",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2018-04-20",
        "image_paths": "86.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          21.2180887773503,
          54.0245097392016
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lidzbark Warmi\u0144ski - zamek biskup\u00f3w warmi\u0144skich",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2018-04-20",
        "image_paths": "87.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.5831127158342,
          54.1257280882873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Grunwald - Pole Bitwy",
        "type": "pole bitwy",
        "date_of_entry": "2010-09-17",
        "image_paths": "88.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          20.1193034159233,
          53.487077561813
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Gniezno - Katedra p.w. Wniebowzi\u0119cia Naj\u015bwi\u0119tszej Marii Panny i \u015bw. Wojciecha",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "1994-09-08",
        "image_paths": "89.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.5923524830175,
          52.5368514734139
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "wyspa - Ostr\u00f3w Lednicki",
        "type": "zabytek archeologiczny",
        "date_of_entry": "1994-09-08",
        "image_paths": "90.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.3779641863284,
          52.527195742542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Zesp\u00f3\u0142 klasztorny Kongregacji Oratorium \u015bw. Filipa Neri, Gosty\u0144 - G\u0142og\u00f3wko",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2008-02-26",
        "image_paths": "91.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0356790611122,
          51.8850880682048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Lubi\u0144 - zesp\u00f3\u0142 opactwa benedyktyn\u00f3w",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2009-12-09",
        "image_paths": "92.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.9016624441587,
          51.9658025209764
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rydzyna - za\u0142o\u017cenie rezydencjonalno-urbanistyczne",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2017-03-15",
        "image_paths": "93.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.6719292015579,
          51.7886542173567
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Pozna\u0144 - historyczny zesp\u00f3\u0142 miasta",
        "type": "uk\u0142ad urbanistyczny",
        "date_of_entry": "2008-11-28",
        "image_paths": "94.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.932894489971,
          52.4119649018983
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "K\u00f3rnik - zesp\u00f3\u0142 zamkowo-parkowy wraz z ko\u015bcio\u0142em parafialnym - nekropoli\u0105 w\u0142a\u015bcicieli",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2011-06-15",
        "image_paths": "95.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.0920468703275,
          52.2422028267749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Rogalin - zesp\u00f3\u0142 pa\u0142acowy z ogrodem i parkiem",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2018-04-20",
        "image_paths": "96.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          16.930402097378,
          52.2343475356255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Zesp\u00f3\u0142 dawnego opactwa cysterskiego w L\u0105dzie nad Wart\u0105",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2009-06-17",
        "image_paths": "97.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.8934882133075,
          52.2027464837022
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Koszuty - zesp\u00f3\u0142 dworsko-parkowy",
        "type": "zesp\u00f3\u0142 rezydencjonalny",
        "date_of_entry": "2018-04-20",
        "image_paths": "98.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          17.1986362480827,
          52.2334820660035
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Ko\u0142bacz - za\u0142o\u017cenie dawnego klasztoru cysters\u00f3w, p\u00f3\u017aniejszej letniej rezydencji ksi\u0105\u017c\u0105t pomorskich i domeny pa\u0144stwowej",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2014-07-21",
        "image_paths": "99.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.8133200780404,
          53.3025004992915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Kamie\u0144 Pomorski - zesp\u00f3\u0142 katedralny",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2005-08-25",
        "image_paths": "100.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          14.7726628296578,
          53.9729021319374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Stargard Szczeci\u0144ski - zesp\u00f3\u0142 ko\u015bcio\u0142a pod wezwaniem Naj\u015bwi\u0119tszej Marii Panny Kr\u00f3lowej \u015awiata oraz \u015bredniowieczne mury obronne miasta",
        "type": "zesp\u00f3\u0142 sakralny i sepulkralny",
        "date_of_entry": "2010-09-17",
        "image_paths": "101.jpg"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          15.0451068151883,
          53.3382093430673
        ]
      }
    }
  ]
};
//Legend's icon
function LeafIcon(colour){

var markerHtmlStyles = `
  background-color:${colour};
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  left: -1.5rem;
  top: -1.5rem;
  position: relative;
  border-radius: 3rem 3rem 0;
  transform: rotate(45deg);
  border: 1px solid #FFFFFF`

return L.divIcon({
  className: "my-custom-pin",
  iconAnchor: [0, 24],
  labelAnchor: [-6, 0],
  popupAnchor: [0, -36],
  html: `<span style="${markerHtmlStyles}" />`
})
}

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox.streets',
accessToken: 'pk.eyJ1IjoiYXJrYWRpdXN6c2xvd2lrIiwiYSI6ImNqd2doandlejA0ajE0OXFvemJpb29uOXkifQ.4fmVdO8FF357ZJYI0j9Tag'
}).addTo(mymap);

//Legend colours
function getColor(d) {
    return d =='zespół sakralny i sepulkralny' ? 'Blue' :
           d =='krajobraz kulturowy'  ? 'BlueViolet' :
           d =='zabytek techniki'  ? 'Brown' :
           d =='dzieło architektury i budownictwa'   ? 'CadetBlue' :
           d =='układ urbanistyczny'   ? 'Chocolate' :
           d =='budownictwo obronne'   ? 'Crimson' :
           d =='zabytek archeologiczny'  ? 'DarkGoldenRod' :
           d =='zespół rezydencjonalny'   ? 'DeepPink' :
           d =='zabytkowy park i ogród'   ? 'DarkGreen' :
           d =='pole bitwy'   ? 'DarkKhaki' :
                      'DarkOliveGreen';
}
// Legend and some settings
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        labels = [],
        categories=['zespół sakralny i sepulkralny','krajobraz kulturowy','zabytek techniki','dzieło architektury i budownictwa','układ urbanistyczny','budownictwo obronne','zabytek archeologiczny','zespół rezydencjonalny','zabytkowy park i ogród','pole bitwy'];
        div.innerHTML ='<p class="legend_header">Pomniki historii </p>';
    for (var i = 0; i < categories.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(categories[i]) + '"></i> ' +
            categories[i]+'</br>';
    }

    return div;
};
legend.addTo(mymap);
// Combination of Gojson and legend colours
var layerGroup = L.geoJSON(dataset, {
    pointToLayer: function(feature, latlng) {
        switch(feature.properties.type) {
              case "zesp\u00f3\u0142 sakralny i sepulkralny":
                var smallIcon = LeafIcon('Blue ')
                break;
              case "krajobraz kulturowy":
                var smallIcon = LeafIcon('BlueViolet  ')
                break;
              case "zabytek techniki":
                var smallIcon = LeafIcon('Brown')
                break;
              case "dzie\u0142o architektury i budownictwa":
                var smallIcon = LeafIcon('CadetBlue')
                break;
              case "uk\u0142ad urbanistyczny":
                var smallIcon = LeafIcon('Chocolate')
                break;
              case "budownictwo obronne":
                var smallIcon = LeafIcon('Crimson ')
                break;
              case "zabytek archeologiczny":
                var smallIcon = LeafIcon('DarkGoldenRod ')
                break;
              case "zesp\u00f3\u0142 rezydencjonalny":
                var smallIcon = LeafIcon('DeepPink  ')
                break;
              case "zabytkowy park i ogr\u00f3d":
                var smallIcon = LeafIcon('DarkGreen ')
                break;
              case "pole bitwy":
                var smallIcon = LeafIcon('DarkKhaki ')
                break;
              default:
                var smallIcon = LeafIcon('DarkOliveGreen ')
        }

    return L.marker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]], {icon: smallIcon});

},// Popups
    onEachFeature: function (feature, layer) {
    layer.bindPopup('<p class="header">'+feature.properties.name+'</p><p class="date">Data wpisu: '+feature.properties.date_of_entry+'</p><img id="image_s" src="/static/images/'+feature.properties.image_paths+'"/>');
}

}).addTo(mymap);
};