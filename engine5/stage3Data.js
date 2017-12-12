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
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [95.0, 4.0, 0],
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
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "wall",
		"translate": [40.0, 4.0, -6.0],
		"mass": 0,
		"geometry": "cube",
		"width": 120,
		"depth": 8,
		"height":40,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.0, 0.6, 1.0],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "cloud.png",
			"bumpMap": "cloud.png",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	// "FLOORS --------------------------------------------------------",
	{
		
		"type": "mesh",
		"name": "floor",
		"translate": [-5.0, 2.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 5,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},

	{
		"type": "mesh",
		"name": "floor",
		"translate": [-1.0, 0.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [9.0, -4.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 8,
		"depth": 15,
		"height": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [12.0, -8.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 8,
		"depth": 15,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [15.0, -10.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 8,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [21.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [28.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [34.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [40.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [46.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [52.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 3,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [58.0, -12.0, 0],
		"mass": 3,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [64.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 12,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [68.0, -10.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [72.0, -8.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [76.0, -8.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 4,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		"type": "mesh",
		"name": "floor",
		"translate": [85.0, -6.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 15,
		"depth": 15,
		"height": 10,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "disturb.jpg",
			"bumpMap": "disturb.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	// DEATH PANELS --------------------------------------------------------",
	{
		
		"type": "mesh",
		"name": "deathpanel",
		"translate": [0.0, -6.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 10,
		"depth": 15,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "lavatile.jpg",
			"bumpMap": "lavatile.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		
		"type": "mesh",
		"name": "deathpanel",
		"translate": [45.0, -12.0, 0],
		"mass": 0,
		"geometry": "cube",
		"width": 50,
		"depth": 15,
		"height": 8,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.6, 0.4, 0.4],
			"specularColor": [0.01, 0.01, 0.01],
			"diffuseMap": "lavatile.jpg",
			"bumpMap": "lavatile.jpg",
			"bumpScale": 0.01,
			"shininess": 100
		}
	},
	
	{
		// "FLAG --------------------------------------------------------",
		"type": "mesh",
		"name": "flag",
		"translate": [87.0, 3.0, 0],
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
		"translate": [15.0, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy2",
		"translate": [28, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy3",
		"translate": [41.0, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy4",
		"translate": [46.0, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "enemy5",
		"translate": [64.0, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	
	{
		"type": "mesh",
		"name": "enemy6",
		"translate": [72.0, 4.0, 0],
		"mass": 1,
		"geometry": "sphere",
		"radius": 0.5,
		"widthSegments": 8,
		"heightSegments": 6,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm2",
			"diffuseColor": [1, 1, 1],
			"specularColor": [0.04, 0.04, 0.04],
			"diffuseMap": "metal.jpg",
			"bumpMap": "metal.jpg",
			"bumpScale": 0.01,
			"shininess": 200
		}
	},
	
	//CHARACTER----------------------------------
	{
		"type": "mesh",
		"name": "cubey",
		"translate": [-4.0, 6.0, 0],
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