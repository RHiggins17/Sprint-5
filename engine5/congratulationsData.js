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
	
	
	//CHARACTER----------------------------------
	{
		"type": "mesh",
		"name": "cubey",
		"translate": [0.0, 2.0, 0],
		"mass": 0,
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
	
	// obj file
	{
		"type": "objFile",
		"name": "osuBot",
		"scale": [1, 1, 1],
		"translate": [5.5, -2.0, 4],
		"url": "osubot.obj",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "osubotAObake.png",
			"bumpMap": "osubotAObake.png",
			"bumpScale": 0.002,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "globe",
		"scale": [1.2, 1.2, 1.2],
		"translate": [0, -2, 4],
		"geometry": "sphere",
		"widthSegments": 20,
		"heightSegments": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "earth_lights_2048.png",
			"bumpMap": "earth_lights_2048.png",
			"bumpScale": 0.01,
			"shininess": 200
		},
		"userData": 
		{ 
			"scripts": ["rotateScript"],
			"rotationSpeed": 0.5
		},
		
	},

	{
		"type": "node",
		"name": "particleSystem",
		"userData": 
		{ 
			"scripts": ["particleScript"],
		},
		"children":
		[
			// sprite
			{
				"type": "sprite",
				"name": "s",
				"scale": [0.1, 0.1, 0.1],
				"translate": [0, 1, 0],
				"material":
				{
					"type": "spriteMaterial",
					"name": "smat1",
					"color": [0.0, 1.0, 1.0],
					"map": "dot.png",
				},
				"userData":
				{
					"vx": 0.0,
					"vy": 0.0,
					"vz": 0.0,
					"life": 100,
				}
			},
		]
	},
	

	// text
	{
		"type": "text",
		"font": "optimer_regular",
		"name": "text1",
		"text": "Congratulations!",
		"size": 1.5,
		"material":
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"color": [0, 0.5, 0],
			"specular": [0.5, 0.5, 0.5],
		}
	}
]
}