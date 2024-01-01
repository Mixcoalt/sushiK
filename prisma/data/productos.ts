
const productos = [
    {
      nombre: "Tradicional",
      precio: 75,
      imagen: "ramen_01",
      categoriaId: 1  
    },
    {
        nombre: "Chiken",
        precio: 85,
        imagen: "ramen_02",
        categoriaId: 1
    },
    {
        nombre: "Vegano",
        precio: 85,
        imagen: "ramen_03",
        categoriaId: 1
    },
    {
        nombre: "Ribu",
        precio: 95,
        imagen: "ramen_04",
        categoriaId: 1
    },
    {
        nombre: "Niku",
        precio: 100,
        imagen: "ramen_05",
        categoriaId: 1
    },
    {
        nombre: "Sopporo",
        precio: 100,
        imagen: "ramen_06",
        categoriaId: 1
    },
    {
        nombre: "Chikin",
        precio: 110,
        imagen: "ramen_07",
        categoriaId: 1
    },
    {
        nombre: "Shio",
        precio: 100,
        imagen: "ramen_08",
        categoriaId: 1
    },
    {
        nombre: "Ika",
        precio: 125,
        imagen: "ramen_09",
        categoriaId: 1
    },
    {
        nombre: "Rayito",
        precio: 125,
        imagen: "ramen_10",
        categoriaId: 1
    },
    {
        nombre: "Daco",
        precio: 155,
        imagen: "ramen_11",
        categoriaId: 1
    },
    {
        nombre: "Nikkis",
        precio: 140,
        imagen: "ramen_12",
        categoriaId: 1
    },
    {
        nombre: "Kuro",
        precio: 150,
        imagen: "ramen_13",
        categoriaId: 1
    },
    {
        nombre: "Haku",
        precio: 170,
        imagen: "ramen_12",
        categoriaId: 1
    },
    {
        nombre: "Yakisoba",
        precio: 90,
        imagen: "yakisoba_01",
        categoriaId: 2
    },
    {
        nombre: "Shoya",
        precio: 100,
        imagen: "yakisoba_02",
        categoriaId: 2
    },
    {
        nombre: "Rayito soba",
        precio: 125,
        imagen: "yakisoba_03",
        categoriaId: 2
    },
    {
        nombre: "Chizzu soba",
        precio: 125,
        imagen: "yakisoba_04",
        categoriaId: 2
    },
    {
        nombre: "Bacon soba",
        precio: 105,
        imagen: "yakisoba_05",
        categoriaId: 2
    },
    {
        nombre: "Vegano",
        precio: 85,
        imagen: "yakisoba_06",
        categoriaId: 2
    },
    {
        nombre: "Pinky soba",
        precio: 105,
        imagen: "yakisoba_07",
        categoriaId: 2
    },
    {
        nombre: "Tamago",
        precio: 100,
        imagen: "yakisoba_08",
        categoriaId: 2
    },
    {
        nombre: "Carbonara",
        precio: 100,
        imagen: "yakisoba_09",
        categoriaId: 2
    },
    {
        nombre: "Chessake frio de tortuga",
        precio: 60,
        imagen: "postres_01",
        categoriaId: 3
    },
    {
        nombre: "Chessake frio de zarzamora",
        precio: 60,
        imagen: "postres_02",
        categoriaId: 3
    },
    {
        nombre: "Flan napolitano de queso crema",
        precio: 55,
        imagen: "postres_03",
        categoriaId: 3
    },
    {
        nombre: "Tiramisu",
        precio: 60,
        imagen: "postres_04",
        categoriaId: 3
    },
    {
        nombre: "Charola familiar",
        precio: 250,
        imagen: "charola_01",
        categoriaId: 4
    },
    {
        nombre: "Kumo charola",
        precio: 280,
        imagen: "charola_02",
        categoriaId: 4
    },
    {
        nombre: "Tokoshuna",
        precio: 250,
        imagen: "charola_03",
        categoriaId: 4
    },
    {
        nombre: "Supreme",
        precio: 420,
        imagen: "charola_04",
        categoriaId: 4
    },
    {
        nombre: "Inari",
        precio: 700,
        imagen: "charola_05",
        categoriaId: 4
    },
    {
        nombre: "Balls",
        precio: 20,
        imagen: "aperitivo_01",
        categoriaId: 5
    },
    {
        nombre: "Orden de balls",
        precio: 75,
        imagen: "aperitivo_02",
        categoriaId: 5
    },
    {
        nombre: "Orden de takoyakis",
        precio: 80,
        imagen: "aperitivo_03",
        categoriaId: 5
    },
    {
        nombre: "Oniguiri",
        precio: 30,
        imagen: "aperitivo_04",
        categoriaId: 5
    },
    {
        nombre: "Oniguiri empanizado",
        precio: 40,
        imagen: "aperitivo_05",
        categoriaId: 5
    },
    {
        nombre: "Orden de temari sushi",
        precio: 90,
        imagen: "aperitivo_06",
        categoriaId: 5
    },
    {
        nombre: "Onigaratzu",
        precio: 65,
        imagen: "aperitivo_07",
        categoriaId: 5
    },
    {
        nombre: "Okonomiyaki",
        precio: 65,
        imagen: "aperitivo_08",
        categoriaId: 5
    },
    {
        nombre: "Yakimeshi",
        precio: 60,
        imagen: "aperitivo_09",
        categoriaId: 5
    },
    {
        nombre: "Kushiagues",
        precio: 20,
        imagen: "aperitivo_10",
        categoriaId: 5
    },
    {
        nombre: "Agua Horchata (Vaso)",
        precio: 25,
        imagen: "bebida_01",
        categoriaId: 6
    },
    {
        nombre: "Agua Jamaica (Vaso)",
        precio: 25,
        imagen: "bebida_02",
        categoriaId: 6
    },
    {
        nombre: "Agua Tamarindo (Vaso)",
        precio: 25,
        imagen: "bebida_03",
        categoriaId: 6
    },
    {
        nombre: "Agua Horchata (jarra)",
        precio: 25,
        imagen: "bebida_04",
        categoriaId: 6
    },
    {
        nombre: "Agua Jamaica (jarra)",
        precio: 25,
        imagen: "bebida_05",
        categoriaId: 6
    },
    
    {
        nombre: "Agua Tamarindo (jarra)",
        precio: 25,
        imagen: "bebida_06",
        categoriaId: 6
    },
    {
        nombre: "Oreo",
        precio: 45,
        imagen: "Frappes_01",
        categoriaId: 7
    },
    {
        nombre: "Medias de seda",
        precio: 45,
        imagen: "Frappes_02",
        categoriaId: 7
    },
    {
        nombre: "Cajeta",
        precio: 45,
        imagen: "Frappes_03",
        categoriaId: 7
    },
    {
        nombre: "Kahlua",
        precio: 45,
        imagen: "Frappes_04",
        categoriaId: 7
    },
    {
        nombre: "Rompope",
        precio: 45,
        imagen: "Frappes_05",
        categoriaId: 7
    },
    {
        nombre: "Chocolate",
        precio: 45,
        imagen: "Frappes_06",
        categoriaId: 7
    },
    {
        nombre: "M&N",
        precio: 50,
        imagen: "Frappes_07",
        categoriaId: 7
    },
    {
        nombre: "Chocoreta",
        precio: 50,
        imagen: "Frappes_08",
        categoriaId: 7
    },
    {
       nombre: "Soya",
       precio: 10,
       imagen: "extras_01",
       categoriaId: 8
    },
    {
        nombre: "Tampico",
        precio: 10,
        imagen: "extras_02",
        categoriaId: 8
    },
    {
        nombre: "Chiles toreados",
        precio: 15,
        imagen: "extras_03",
        categoriaId: 8
    },
    {
        nombre: "Sriracha",
        precio: 15,
        imagen: "extras_04",
        categoriaId: 8
    },
    {
        nombre: "Aderezo de chipotle",
        precio: 10,
        imagen: "extras_05",
        categoriaId: 8
    },
    {
        nombre: "Teriyaki",
        precio: 10,
        imagen: "extras_06",
        categoriaId: 8
    },
    {
        nombre: "Empanizado",
        precio: 75,
        imagen: "calientes_01",
        categoriaId: 9
    },
    {
        nombre: "Empanizado",
        precio: 75,
        imagen: "calientes_01",
        categoriaId: 9
    },
    {
        nombre: "Mar y tierra",
        precio: 90,
        imagen: "calientes_02",
        categoriaId: 9
    },
    {
        nombre: "Apachito",
        precio: 90,
        imagen: "calientes_03",
        categoriaId: 9
    },
    {
        nombre: "Karamaki",
        precio: 85,
        imagen: "calientes_04",
        categoriaId: 9
    },
    {
        nombre: "Chuky",
        precio: 90,
        imagen: "calientes_05",
        categoriaId: 9
    },
    {
        nombre: "Acapulco",
        precio: 105,
        imagen: "calientes_06",
        categoriaId: 9
    },
    {
        nombre: "Pig",
        precio: 90,
        imagen: "calientes_07",
        categoriaId: 9
    },
    {
        nombre: "Alika",
        precio: 105,
        imagen: "calientes_08",
        categoriaId: 9
    },
    {
        nombre: "Mexican",
        precio: 100,
        imagen: "calientes_09",
        categoriaId: 9
    },
    {
        nombre: "Quiquin",
        precio: 100,
        imagen: "calientes_10",
        categoriaId: 9
    },
    {
        nombre: "Spoody",
        precio: 100,
        imagen: "calientes_11",
        categoriaId: 9
    },
    {
        nombre: "Saru",
        precio: 90,
        imagen: "calientes_12",
        categoriaId: 9
    },
    {
        nombre: "Bacon",
        precio: 105,
        imagen: "calientes_13",
        categoriaId: 9
    },
    {
        nombre: "Oppa",
        precio: 105,
        imagen: "calientes_14",
        categoriaId: 9
    },
    {
        nombre: "Uzz",
        precio: 140,
        imagen: "calientes_15",
        categoriaId: 9
    },
    {
        nombre: "Tempura",
        precio: 105,
        imagen: "calientes_16",
        categoriaId: 9
    },
    {
        nombre: "Kumo",
        precio: 150,
        imagen: "calientes_17",
        categoriaId: 9
    },
    {
        nombre: "León",
        precio: 140,
        imagen: "calientes_18",
        categoriaId: 9
    },
    {
        nombre: "Trompo",
        precio: 110,
        imagen: "calientes_19",
        categoriaId: 9
    },
    {
        nombre: "Xalapeño Pepper",
        precio: 110,
        imagen: "calientes_20",
        categoriaId: 9
    },
    {
        nombre: "Augusto",
        precio: 150,
        imagen: "calientes_21",
        categoriaId: 9
    },
    {
        nombre: "Metztli",
        precio: 165,
        imagen: "calientes_22",
        categoriaId: 9
    },
    {
        nombre: "Tradicional",
        precio: 75,
        imagen: "Frios_01",
        categoriaId: 10
    },
    {
        nombre: "Aguacate",
        precio: 75,
        imagen: "Frios_02",
        categoriaId: 10
    },
    {
        nombre: "Platano",
        precio: 75,
        imagen: "Frios_03",
        categoriaId: 10
    },
    {
        nombre: "California maki",
        precio: 70,
        imagen: "Frios_04",
        categoriaId: 10
    },
    {
        nombre: "Atún",
        precio: 85,
        imagen: "Frios_05",
        categoriaId: 10
    },
    {
        nombre: "Laika",
        precio: 95,
        imagen: "Frios_06",
        categoriaId: 10
    },
    {
        nombre: "Momo",
        precio: 105,
        imagen: "Frios_07",
        categoriaId: 10
    },
    {
        nombre: "Mousy",
        precio: 100,
        imagen: "Frios_08",
        categoriaId: 10
    },
    {
        nombre: "Futomaki",
        precio: 90,
        imagen: "Frios_09",
        categoriaId: 10
    },
    {
        nombre: "King",
        precio: 85,
        imagen: "Frios_10",
        categoriaId: 10
    },
    {
        nombre: "Amargadita",
        precio: 90,
        imagen: "Frios_11",
        categoriaId: 10
    },
    {
        nombre: "Sakura",
        precio: 105,
        imagen: "Frios_12",
        categoriaId: 10
    },
    {
        nombre: "Loki",
        precio: 105,
        imagen: "Frios_13",
        categoriaId: 10
    },
    {
        nombre: "Cuba",
        precio: 100,
        imagen: "Frios_14",
        categoriaId: 10
    },
    {
        nombre: "Panchito",
        precio: 80,
        imagen: "Frios_15",
        categoriaId: 10
    },
    {
        nombre: "Coco",
        precio: 105,
        imagen: "Frios_16",
        categoriaId: 10
    },
    {
        nombre: "Junior",
        precio: 105,
        imagen: "Frios_17",
        categoriaId: 10
    },
    {
        nombre: "Platano Supreme",
        precio: 105,
        imagen: "Frios_18",
        categoriaId: 10
    },
    {
        nombre: "Yolotl",
        precio: 105,
        imagen: "Frios_19",
        categoriaId: 10
    },
    {
        nombre: "Ligth",
        precio: 110,
        imagen: "Frios_20",
        categoriaId: 10
    },
    {
        nombre: "Kani",
        precio: 140,
        imagen: "Frios_21",
        categoriaId: 10
    },
]

export {
    productos 
}