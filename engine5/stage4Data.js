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
		"translate": [-11.0, 4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 10,
		"depth": 15,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [13.0, 4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 10,
		"depth": 15,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [1.0, 4.0, -6.0],
		"mass": 0,
		"geometry": "cube",
		"width": 20,
		"depth": 8,
		"height":20,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "earth_lights_2048.png",
			"bumpMap": "earth_lights_2048.png",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [1.0, 8.0, -6.0],
		"mass": 0,
		"geometry": "cube",
		"width": 20,
		"depth": 20,
		"height":2,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "earth_lights_2048.png",
			"bumpMap": "earth_lights_2048.png",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	// "FLOOR --------------------------------------------------------",
	{
		"type": "mesh",
		"name": "floor",
		"translate": [1.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 15,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "moon_1024.jpg",
			"bumpMap": "moon_1024.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	//Shot----------------------------------
	{
		"type": "mesh",
		"name": "shot",
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
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
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
	
	//CHARACTER----------------------------------
	{
		"type": "mesh",
		"name": "cubey",
		"translate": [-3.0, 0.0, 0],
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
	},
	
	//Enemy----------------------------------
	{
		"type": "mesh",
		"name": "enemy",
		"translate": [3.0, 0.0, 0],
		"mass": 20,
		"geometry": "cube",
		"width": 1,
		"height": 1,
		"depth": 1,
		"material": 
		{
			"type": "meshToonMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.5, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	},
]
}