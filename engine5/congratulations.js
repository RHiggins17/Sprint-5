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
	
	{
		// "FLOOR --------------------------------------------------------",
		"type": "mesh",
		"name": "floor",
		"translate": [-5.0, -4.0, 0],
		"geometry": "plane",
		"width": 6,
		"height": 2,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	},
	
	{
		// "FLOOR --------------------------------------------------------",
		"type": "mesh",
		"name": "floor",
		"translate": [1.0, -4.0, 0],
		"geometry": "plane",
		"width": 3,
		"height": 2,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	},
	
	{
		// "FLOOR --------------------------------------------------------",
		"type": "mesh",
		"name": "floor",
		"translate": [6.0, -4.0, 0],
		"geometry": "plane",
		"width": 4,
		"height": 2,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 100
		}
	},
	
	{
		"type": "sprite",
		"name": "sprite",
		"scale": [2, 3, 1],
		"translate": [-5.0, -2.5, 0],
		"material":
		{
			"type": "spriteMaterial",
			"name": "smat1",
			"color": [1.0, 0.5, 0.5],
			"map": "robotImage.png",
		}
	}
]
}