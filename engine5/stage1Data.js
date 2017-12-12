var objects = { 

"type": "node",
"name": "rootNode",

"children":
[
	// CAMERA
	{
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 18],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},

	// LIGHTS
	{
		"type": "directionalLight",
		"name": "dlight1",
		"color": [1, 1, 0.5],
		"position": [1, 2, 1]
	},
	{
		"type": "directionalLight",
		"name": "dlight2",
		"color": [0.1, 0.1, 0.3],
		"position": [-1, 0.1, 0.5]
	},
	{
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": 1.0
	},
	
	//WALLS---------------------------------------
	{
		"type": "mesh",
		"name": "wall",
		"translate": [-12.0, 4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 10,
		"depth": 15,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "backgrounddetailed6.jpg",
			"bumpMap": "backgrounddetailed6.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [60.0, 4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 10,
		"depth": 15,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "backgrounddetailed6.jpg",
			"bumpMap": "backgrounddetailed6.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [30.0, 4.0, -6.0],
		"mass": 0,
		"geometry": "cube",
		"width": 80,
		"depth": 8,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "waternormals.jpg",
			"bumpMap": "waternormals.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	// "FLOORS --------------------------------------------------------",
	{
		
		"type": "mesh",
		"name": "floor",
		"translate": [-5.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 5,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},

	{
		"type": "mesh",
		"name": "floor",
		"translate": [1.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [6.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [9.0, -3.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [12.0, -2.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [12.0, -2.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [18.0, -2.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [21.0, -3.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [40.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 40,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	{
		"type": "mesh",
		"name": "floor",
		"translate": [50.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 20,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "grasslight-big.jpg",
			"bumpMap": "grasslight-big.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	// DEATH PANELS --------------------------------------------------------",
	{
		
		"type": "mesh",
		"name": "deathpanel",
		"translate": [-1.5, -6.5, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 2,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "waternormals.jpg",
			"bumpMap": "waternormals.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		
		"type": "mesh",
		"name": "deathpanel",
		"translate": [3.5, -6.5, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 2,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "waternormals.jpg",
			"bumpMap": "waternormals.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		
		"type": "mesh",
		"name": "deathpanel",
		"translate": [15, -2.5, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 2,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "waternormals.jpg",
			"bumpMap": "waternormals.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		// "FLAG --------------------------------------------------------",
		"type": "mesh",
		"name": "flag",
		"translate": [50.0, 0.0, 0],
		"mass": 0,
		"geometry": "cone",
		"radius": 2,
		"height": 2,
		"radiusSegments": 8,
		"heightSegments": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "land_ocean_ice_cloud_2048.jpg",
			"bumpMap": "land_ocean_ice_cloud_2048.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	//Attack----------------------------------
	{
		"type": "mesh",
		"name": "attack",
		"translate": [0.0, -20.0, 0],
		"mass": 1,
		"geometry": "cylinder",
		"radius": 0.2,
		"height": 0.2,
		"radiusSegments": 8,
		"heightSegments": 2,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "lensflare0.png",
			"bumpMap": "lensflare0.png",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	//Enemy----------------------------------
	{
		"type": "mesh",
		"name": "enemy1",
		"translate": [11.0, 4.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "decal-normal.jpg",
			"bumpMap": "decal-normal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy2",
		"translate": [21.0, 4.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "decal-normal.jpg",
			"bumpMap": "decal-normal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy3",
		"translate": [28.0, 4.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "decal-normal.jpg",
			"bumpMap": "decal-normal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy4",
		"translate": [35.0, 4.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "decal-normal.jpg",
			"bumpMap": "decal-normal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy5",
		"translate": [40.0, 4.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "decal-normal.jpg",
			"bumpMap": "decal-normal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	
	//CHARACTER----------------------------------
	{
		"type": "mesh",
		"name": "cubey",
		"translate": [-4.0, 0.0, 0],
		"mass": 1,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshToonMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.8, 0.0, 0.8],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	}
]
}