/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _namespace = __webpack_require__(1);
	
	var _namespace2 = _interopRequireDefault(_namespace);
	
	var _ShooterUtilsRequestAnimationFrame = __webpack_require__(2);
	
	var _ShooterUtilsRequestAnimationFrame2 = _interopRequireDefault(_ShooterUtilsRequestAnimationFrame);
	
	var _ShooterUtilsRequestPointerLock = __webpack_require__(3);
	
	var _ShooterUtilsRequestPointerLock2 = _interopRequireDefault(_ShooterUtilsRequestPointerLock);
	
	var _ShooterControllersWindowController = __webpack_require__(4);
	
	var _ShooterControllersWindowController2 = _interopRequireDefault(_ShooterControllersWindowController);
	
	var _ShooterGraphicsRenderer = __webpack_require__(6);
	
	var _ShooterGraphicsRenderer2 = _interopRequireDefault(_ShooterGraphicsRenderer);
	
	var _ShooterEntitiesWorld = __webpack_require__(7);
	
	var _ShooterEntitiesWorld2 = _interopRequireDefault(_ShooterEntitiesWorld);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.Game = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.renderer = new _ShooterGraphicsRenderer2.default();
					this.world = new _ShooterEntitiesWorld2.default();
	
					this.windowController = _ShooterControllersWindowController2.default.create(this.world.getCamera(), this.renderer);
	
					this.FPS = new Stats();
					this.FPS.setMode(0);
	
					this.FPS.domElement.style.position = 'absolute';
					this.FPS.domElement.style.left = '0px';
					this.FPS.domElement.style.top = '0px';
	
					document.body.appendChild(this.FPS.domElement);
	
					var self = this;
	
					(function animate() {
							(0, _ShooterUtilsRequestAnimationFrame2.default)(animate);
	
							self.FPS.begin();
	
							self.render();
	
							self.FPS.end();
					})();
	
					console.log("> Shooter Game > constructor > ready");
			}
	
			_createClass(_class, [{
					key: 'render',
					value: function render() {
							this.world.update();
							this.renderer.render(this.world.getScene(), this.world.getCamera());
					}
			}]);
	
			return _class;
	}();
	
	window.onload = function () {
	
			/* LOCK THE POINTER */
			(0, _ShooterUtilsRequestPointerLock2.default)();
	
			/* START GAME */
			var __instance = new Shooter.Game();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	window.Shooter = "undefined" === typeof Shooter ? {} : Shooter;
	
	window.Shooter.namespace = function (namespace) {
	    var parts = namespace.split('.'),
	        parent = Shooter;
	
	    if ("Shooter" === parts[0]) {
	        parts = parts.slice(1);
	    }
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var singlePart = _step.value;
	
	            if ("undefined" === typeof parent[singlePart]) {
	                parent[singlePart] = {};
	            }
	            parent = parent[singlePart];
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }
	
	    return parent;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestAnimationFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	}();
	
	exports.default = Shooter.Utils.requestAnimationFrame;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	Shooter.namespace("Shooter.Utils");
	
	Shooter.Utils.requestPointerLock = function () {
	
			var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;
	
			if (havePointerLock) {
					(function () {
	
							console.log("Shooter.Utils.requestPointerLock > Pointer Lock API was founded.");
	
							var body = document.body;
	
							var lockPointer = function lockPointer(event) {
	
									body.requestPointerLock = body.requestPointerLock || body.mozRequestPointerLock || body.webkitRequestPointerLock;
	
									body.requestPointerLock();
							};
	
							body.addEventListener('click', lockPointer, false);
					})();
			} else {
					console.log("Your browser doesn't support Pointer Lock API.");
			}
	};
	
	exports.default = Shooter.Utils.requestPointerLock;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.WindowController = function (_AbstractController) {
		_inherits(_class, _AbstractController);
	
		function _class(camera, renderer) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.camera = camera;
			_this.renderer = renderer.renderer;
			return _this;
		}
	
		_createClass(_class, [{
			key: 'attachEvents',
			value: function attachEvents() {
				var _this2 = this;
	
				this.onWindowResize = function () {
	
					_this2.camera.aspect = window.innerWidth / window.innerHeight;
					_this2.camera.updateProjectionMatrix();
	
					_this2.renderer.setSize(window.innerWidth, window.innerHeight);
				};
	
				var self = this;
	
				window.addEventListener('resize', function (event) {
					_this2.onWindowResize(event);
				}, false);
	
				document.addEventListener('fullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('mozfullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('webkitfullscreenchange', function (event) {
					_this2.onWindowResize(event);
				}, false);
				document.addEventListener('MSFullscreenChange', function (event) {
					_this2.onWindowResize(event);
				}, false);
			}
		}], [{
			key: 'create',
			value: function create(camera, renderer) {
	
				var controller = new Shooter.Controllers.WindowController(camera, renderer);
	
				return controller;
			}
		}]);
	
		return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.WindowController;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.AbstractController = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.attachEvents();
	
			console.log("> Shooter.Controllers.AbstractController > constructor > ready");
		}
	
		_createClass(_class, [{
			key: "attachEvents",
			value: function attachEvents() {}
		}, {
			key: "detachEvents",
			value: function detachEvents() {}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Controllers.AbstractController;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	Shooter.Graphics.Renderer = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.renderer = new THREE.WebGLRenderer();
			this.renderer.setSize(window.innerWidth, window.innerHeight);
			document.body.appendChild(this.renderer.domElement);
	
			console.log("> Shooter.Graphics.Render > constructor > ready");
		}
	
		_createClass(_class, [{
			key: "render",
			value: function render(scene, camera) {
				this.renderer.render(scene, camera);
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Renderer;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesPlayer = __webpack_require__(8);
	
	var _ShooterEntitiesPlayer2 = _interopRequireDefault(_ShooterEntitiesPlayer);
	
	var _ShooterEntitiesFloor = __webpack_require__(12);
	
	var _ShooterEntitiesFloor2 = _interopRequireDefault(_ShooterEntitiesFloor);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder = __webpack_require__(14);
	
	var _ShooterEntitiesBuildersLargeHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersLargeHouseBuilder);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder = __webpack_require__(19);
	
	var _ShooterEntitiesBuildersMediumHouseBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersMediumHouseBuilder);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	var _ShooterEntitiesBox = __webpack_require__(20);
	
	var _ShooterEntitiesBox2 = _interopRequireDefault(_ShooterEntitiesBox);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.World = function () {
			function _class() {
					_classCallCheck(this, _class);
	
					this.scene = new THREE.Scene();
	
					this.player = new _ShooterEntitiesPlayer2.default(this.scene);
					this.scene.add(this.player.getControls());
	
					this.largeHouseBuilder = new _ShooterEntitiesBuildersLargeHouseBuilder2.default();
					this.mediumHouseBuilder = new _ShooterEntitiesBuildersMediumHouseBuilder2.default();
	
					var building = this.largeHouseBuilder.build(new THREE.Vector3(30, 10, -40));
					this.scene.add(building);
	
					building = this.largeHouseBuilder.build(new THREE.Vector3(180, 10, -100), new THREE.Vector3(0, Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(85, 10, -35));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(135, 10, -35), new THREE.Vector3(0, Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(30, 10, 55), new THREE.Vector3(0, -Math.PI / 2, 0));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(70, 10, 55));
					this.scene.add(building);
	
					building = this.mediumHouseBuilder.build(new THREE.Vector3(110, 10, 55), new THREE.Vector3(0, Math.PI, 0));
					this.scene.add(building);
	
					var box = _ShooterEntitiesBox2.default.create();
					box.position.set(18, 1.5, 38.5);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(21, 1.5, 38.5);
					this.scene.add(box);
	
					/* GREEN POINT RESPAWN */
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-30, 1.5, 70);
					box.rotation.set(0, Math.PI / 4, 0);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 74);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 77);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 1.5, 80);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 4.5, 80);
					this.scene.add(box);
	
					box = _ShooterEntitiesBox2.default.create();
					box.position.set(-28.5, 2.1, 83.6);
					box.rotation.set(Math.PI / 4, 0, 0);
					this.scene.add(box);
	
					/* ------------------ */
	
					var floor = _ShooterEntitiesFloor2.default.create();
					floor.position.set(-1000, 0, -1000);
					floor.rotation.set(Math.PI / 2, 0, 0);
					this.scene.add(floor);
	
					/* SKY SPHERE */
	
					var sky_texture = new THREE.Texture();
	
					_ShooterGraphicsLoader2.default.instance.getImage('img/skysphere.jpg', function (image) {
							sky_texture.image = image;
							sky_texture.needsUpdate = true;
					});
	
					var geometry = new THREE.SphereGeometry(2000, 32, 32);
					var material = new THREE.MeshBasicMaterial({ map: sky_texture, overdraw: true });
					material.side = THREE.DoubleSide;
					var sky = new THREE.Mesh(geometry, material);
	
					this.scene.add(sky);
					/* ---------- */
	
					/* DESERT */
	
					/*let desert_texture, loader;
	    		desert_texture = new THREE.Texture();
	    loader = new THREE.ImageLoader();
	    		loader.load('img/desert.jpg', (image) => {
	    	desert_texture.image = image;
	    	desert_texture.needsUpdate = true;
	    });
	    		geometry = new THREE.ParametricGeometry((u, v) => {
	    			u = 1000 * u;
	    	v = 1000 * v;
	    	let y = 60 * Math.abs(Math.sin(Math.pow(u * v, 1 / 5)));
	    			return new THREE.Vector3(u, y, v);
	    }, 20, 20);
	    		material = new THREE.MeshBasicMaterial({ map: desert_texture, overdraw: true });
	    material.side = THREE.DoubleSide;
	    let curve = new THREE.Mesh(geometry, material);
	    		curve.position.x = -10;
	    curve.position.z = -300;
	    curve.position.y = -10;
	    		curve.rotation.y = Math.PI / 2;
	    		this.scene.add(curve);
	    		curve = new THREE.Mesh(geometry, material);
	    		curve.position.x = 10;
	    curve.position.z = -300;
	    curve.position.y = -10;
	    		curve.rotation.y = Math.PI;
	    		this.scene.add(curve);*/
	
					/* ------ */
	
					/* SKY */
	
					/*geometry = new THREE.SphereGeometry(3000);
	    		let canvas = document.createElement('canvas');
	    let context = canvas.getContext('2d');
	    		context.canvas.width = 3000;
	    context.canvas.height = 3000;
	    		let gradient = context.createRadialGradient(1500, 1500, 30, 1500, 1500, 700);
	    		gradient.addColorStop(0, 'white');
	    gradient.addColorStop(0.1, '#AAA8FF');
	    gradient.addColorStop(1, '#504DFF');
	    		context.arc(1500, 1500, 3000, 0, 2 * Math.PI);
	    		context.fillStyle = gradient;
	    context.fill();
	    		let shadowTexture = new THREE.Texture(canvas);
	    shadowTexture.needsUpdate = true;
	    		material = new THREE.MeshBasicMaterial({
	    	map: shadowTexture,
	    	side: THREE.BackSide
	    });
	    		let sky = new THREE.Mesh(geometry, material);
	    		sky.rotation.y = -Math.PI / 2;
	    sky.rotation.z = Math.PI / 9;
	    		this.scene.add(sky);*/
	
					/* ------ */
	
					console.log("> Shooter.Entities.World > constructor > ready");
			}
	
			_createClass(_class, [{
					key: 'update',
					value: function update() {
							this.player.update(this.scene);
					}
			}, {
					key: 'getScene',
					value: function getScene() {
							return this.scene;
					}
			}, {
					key: 'getCamera',
					value: function getCamera() {
							return this.player.getCamera();
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.World;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(9);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersKeyboardController = __webpack_require__(10);
	
	var _ShooterControllersKeyboardController2 = _interopRequireDefault(_ShooterControllersKeyboardController);
	
	var _ShooterControllersMouseController = __webpack_require__(11);
	
	var _ShooterControllersMouseController2 = _interopRequireDefault(_ShooterControllersMouseController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Player = function () {
		function _class(scene) {
			_classCallCheck(this, _class);
	
			this.moveForward = false;
			this.moveLeft = false;
			this.moveBackward = false;
			this.moveRight = false;
	
			this.jumping = false;
			this.falling = false;
			this.jumpingSaturation = Math.PI / 2;
	
			this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
			this.camera.position.set(-40, 3, 80);
			this.camera.lookAt(0, 0, -1);
	
			this.keyboardController = _ShooterControllersKeyboardController2.default.create(this);
			this.mouseController = _ShooterControllersMouseController2.default.create(this);
	
			console.log("> Shooter.Entities.Player > constructor > ready");
		}
	
		_createClass(_class, [{
			key: 'update',
			value: function update(scene) {
	
				var worldDirection = this.camera.getWorldDirection().normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				var strafe = new THREE.Vector3();
				strafe.crossVectors(worldDirection, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				var forward = new THREE.Vector3();
				forward.crossVectors(strafe, new THREE.Vector3(0, 1, 0)).normalize().multiplyScalar(_ShooterConstants2.default.MOVEMENT_SPEED);
	
				if (!this.jumping && !this.falling) {
	
					this.movingVector = new THREE.Vector3(0, 0, 0);
	
					if (this.moveForward) {
						this.movingVector.sub(forward);
					}
	
					if (this.moveLeft) {
						this.movingVector.sub(strafe);
					}
	
					if (this.moveBackward) {
						this.movingVector.add(forward);
					}
	
					if (this.moveRight) {
						this.movingVector.add(strafe);
					}
				}
	
				this.camera.position.x += this.movingVector.x;
				this.camera.position.z += this.movingVector.z;
	
				this.gravitation(scene);
	
				if (this.jumping) {
	
					var originPoint = this.camera.position.clone();
	
					originPoint.y += 1; // prevent intersection with the ground and grid.
	
					var ray = new THREE.Raycaster(originPoint, new THREE.Vector3(0, 1, 0));
					var collisionResults = ray.intersectObjects(scene.children);
	
					if (this.jumpingSaturation <= 0 || collisionResults.length > 0 && collisionResults[0].distance < 1.25) {
	
						this.jumping = false;
						this.falling = true;
						this.jumpingSaturation = 0;
					} else {
	
						var addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
						this.camera.position.y += addHeight;
						this.jumpingSaturation -= Math.PI / _ShooterConstants2.default.GRAVITY;
					}
				}
	
				if (this.falling) {
	
					var _originPoint = this.camera.position.clone();
					var _ray = new THREE.Raycaster(_originPoint, new THREE.Vector3(0, -1, 0));
					var _collisionResults = _ray.intersectObjects(scene.children);
	
					if (_collisionResults.length > 0 && _collisionResults[0].distance < 3) {
	
						this.falling = false;
						this.jumpingSaturation = Math.PI / 2;
	
						this.camera.position.y = Math.max(this.camera.position.y, 3);
					} else {
	
						var _addHeight = _ShooterConstants2.default.JUMP_STRENGTH * Math.sin(this.jumpingSaturation);
						this.camera.position.y -= _addHeight;
						this.jumpingSaturation += Math.PI / _ShooterConstants2.default.GRAVITY;
	
						this.jumpingSaturation = Math.min(this.jumpingSaturation, Math.PI / 2);
					}
				}
			}
		}, {
			key: 'gravitation',
			value: function gravitation(scene) {
	
				if (!this.jumping) {
	
					var ray = new THREE.Raycaster(this.camera.position.clone(), new THREE.Vector3(0, -1, 0));
					var collisionResults = ray.intersectObjects(scene.children);
	
					if (!collisionResults.length || collisionResults.length > 0 && collisionResults[0].distance > 2) {
						this.falling = true;
					}
				}
			}
		}, {
			key: 'getCamera',
			value: function getCamera() {
				return this.camera;
			}
		}, {
			key: 'getControls',
			value: function getControls() {
				return this.mouseController.getObject();
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.Player;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Shooter.Constants = {
	
		/* CONTROLS */
		KEYS: {
	
			W: 87,
			A: 65,
			S: 83,
			D: 68,
	
			ARROW_UP: 38,
			ARROW_LEFT: 37,
			ARROW_DOWN: 40,
			ARROW_RIGHT: 39,
	
			WHITESPACE: 32
		},
	
		CURSOR_SPEED: 0.002,
	
		/* PHYSIC */
		JUMP_STRENGTH: 0.5,
		GRAVITY: 50,
		MOVEMENT_SPEED: 0.25
	
	};
	
	exports.default = Shooter.Constants;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(9);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.KeyboardController = function (_AbstractController) {
		_inherits(_class, _AbstractController);
	
		function _class(player) {
			_classCallCheck(this, _class);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
			_this.player = player;
			return _this;
		}
	
		_createClass(_class, [{
			key: 'attachEvents',
			value: function attachEvents() {
				var _this2 = this;
	
				this.onKeyDown = function (event) {
	
					switch (event.keyCode) {
						case _ShooterConstants2.default.KEYS.W:
						case _ShooterConstants2.default.KEYS.ARROW_UP:
							{
								_this2.player.moveForward = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.A:
						case _ShooterConstants2.default.KEYS.ARROW_LEFT:
							{
								_this2.player.moveLeft = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.S:
						case _ShooterConstants2.default.KEYS.ARROW_DOWN:
							{
								_this2.player.moveBackward = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.D:
						case _ShooterConstants2.default.KEYS.ARROW_RIGHT:
							{
								_this2.player.moveRight = true;
								break;
							}
						case _ShooterConstants2.default.KEYS.WHITESPACE:
							{
								if (!_this2.player.falling) {
									_this2.player.jumping = true;
								}
								break;
							}
					}
				};
	
				this.onKeyUp = function (event) {
	
					switch (event.keyCode) {
						case _ShooterConstants2.default.KEYS.W:
						case _ShooterConstants2.default.KEYS.ARROW_UP:
							{
								_this2.player.moveForward = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.A:
						case _ShooterConstants2.default.KEYS.ARROW_LEFT:
							{
								_this2.player.moveLeft = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.S:
						case _ShooterConstants2.default.KEYS.ARROW_DOWN:
							{
								_this2.player.moveBackward = false;
								break;
							}
						case _ShooterConstants2.default.KEYS.D:
						case _ShooterConstants2.default.KEYS.ARROW_RIGHT:
							{
								_this2.player.moveRight = false;
								break;
							}
					}
				};
	
				var self = this;
	
				document.addEventListener('keydown', function (event) {
					self.onKeyDown(event);
				}, false);
				document.addEventListener('keyup', function (event) {
					self.onKeyUp(event);
				}, false);
			}
		}], [{
			key: 'create',
			value: function create(player) {
	
				var controller = new Shooter.Controllers.KeyboardController(player);
	
				return controller;
			}
		}]);
	
		return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.KeyboardController;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterConstants = __webpack_require__(9);
	
	var _ShooterConstants2 = _interopRequireDefault(_ShooterConstants);
	
	var _ShooterControllersAbstractController = __webpack_require__(5);
	
	var _ShooterControllersAbstractController2 = _interopRequireDefault(_ShooterControllersAbstractController);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Controllers");
	
	Shooter.Controllers.MouseController = function (_AbstractController) {
			_inherits(_class, _AbstractController);
	
			function _class(player) {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					_this.player = player;
	
					_this.player.camera.rotation.set(0, 0, 0);
	
					_this.pitchObject = new THREE.Object3D();
					_this.pitchObject.add();
	
					_this.yawObject = new THREE.Object3D();
					_this.yawObject.add(_this.pitchObject);
	
					_this.PI_2 = -0.1 + Math.PI / 2; // -0.1 is the Epsilon for gimbal lock prevent.
					return _this;
			}
	
			_createClass(_class, [{
					key: 'attachEvents',
					value: function attachEvents() {
							var _this2 = this;
	
							this.onMouseMove = function (event) {
	
									var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
									var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	
									_this2.yawObject.rotation.y -= movementX * _ShooterConstants2.default.CURSOR_SPEED;
									_this2.pitchObject.rotation.x -= movementY * _ShooterConstants2.default.CURSOR_SPEED;
	
									_this2.pitchObject.rotation.x = Math.max(-_this2.PI_2, Math.min(_this2.PI_2, _this2.pitchObject.rotation.x));
	
									var direction = new THREE.Vector3(0, 0, -1);
									var rotation = new THREE.Euler(0, 0, 0, "YXZ");
									var lookAt = new THREE.Vector3();
	
									rotation.set(_this2.pitchObject.rotation.x, _this2.yawObject.rotation.y, 0);
	
									lookAt.copy(direction).applyEuler(rotation);
	
									lookAt.x += _this2.player.camera.position.x;
									lookAt.y += _this2.player.camera.position.y;
									lookAt.z += _this2.player.camera.position.z;
	
									_this2.player.camera.lookAt(lookAt);
							};
	
							var self = this;
	
							document.addEventListener('mousemove', function (event) {
									self.onMouseMove(event);
							}, false);
					}
			}, {
					key: 'getObject',
					value: function getObject() {
	
							return this.yawObject;
					}
			}], [{
					key: 'create',
					value: function create(player) {
	
							var controller = new Shooter.Controllers.MouseController(player);
	
							return controller;
					}
			}]);
	
			return _class;
	}(_ShooterControllersAbstractController2.default);
	
	exports.default = Shooter.Controllers.MouseController;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Floor = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var floor_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/floor.jpg', function (image) {
									floor_texture.image = image;
									floor_texture.needsUpdate = true;
									floor_texture.wrapS = THREE.RepeatWrapping;
									floor_texture.wrapT = THREE.RepeatWrapping;
									floor_texture.repeat.set(100, 100);
							});
	
							var geometry = new THREE.PlaneGeometry(3000, 3000, 40, 40);
							var material = new THREE.MeshBasicMaterial({ map: floor_texture, overdraw: true });
							material.side = THREE.DoubleSide;
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Floor;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Graphics");
	
	var _instance = Symbol();
	
	Shooter.Graphics.Loader = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			this.loader = new THREE.ImageLoader();
		}
	
		_createClass(_class, [{
			key: "getImage",
			value: function getImage(path, callback) {
				this.loader.load(path, function (image) {
					callback(image);
				});
			}
		}], [{
			key: "instance",
			get: function get() {
				if (!this[_instance]) {
					this[_instance] = new Shooter.Graphics.Loader();
				}
				return this[_instance];
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Graphics.Loader;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(15);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(16);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(17);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(18);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.LargeHouseBuilder = function (_AbstractBuilder) {
			_inherits(_class, _AbstractBuilder);
	
			function _class() {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					console.log("> Shooter.Entities.Builders.LargeHouseBuilder > constructor > ready");
					return _this;
			}
	
			_createClass(_class, [{
					key: 'buildFacade',
					value: function buildFacade() {
	
							var mesh = void 0,
							    material = void 0,
							    block = void 0,
							    buildingBlocks = void 0;
	
							buildingBlocks = new THREE.Geometry();
	
							block = _ShooterEntitiesBlock2.default.create(54, 10, 40);
							block.position.set(27, 5, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							block = _ShooterEntitiesBlock2.default.create(18, 10, 40);
							block.position.set(45, 15, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							block = _ShooterEntitiesBlock2.default.create(18, 10, 40);
							block.position.set(9, 15, -20);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							var block_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
									block_texture.image = image;
									block_texture.needsUpdate = true;
									block_texture.wrapS = THREE.RepeatWrapping;
									block_texture.wrapT = THREE.RepeatWrapping;
									block_texture.repeat.set(10, 5);
							});
	
							this.assignUVs(buildingBlocks);
	
							material = new THREE.MeshBasicMaterial({ map: block_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlocks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildWindows',
					value: function buildWindows() {
	
							var gameWindow = void 0;
	
							/* FORWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(9.3, 12.5, 0.01);
	
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45.3, 12.5, 0.01);
	
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45.3, 3.5, 0.01);
	
							this.instance.add(gameWindow);
	
							/* --------------- */
	
							/* RIGHT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 15, -12);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 5, -28);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(54.01, 15, -36);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
	
							/* BACKWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(9, 15, -40.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(45, 15, -40.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							/* ---------------- */
	
							/* LEFT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 15, -28);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 15, -12);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
					}
			}, {
					key: 'buildBlanks',
					value: function buildBlanks() {
	
							var mesh = void 0,
							    material = void 0,
							    blank = void 0,
							    buildingBlanks = void 0;
	
							buildingBlanks = new THREE.Geometry();
	
							for (var i = 0; i < 10; ++i) {
	
									blank = _ShooterEntitiesBlank2.default.create(i % 3 ? 0.5 : 1, i < 4 || i > 5 ? 20 : 10, i % 3 ? 0.25 : 0.5, true);
									blank.position.set((i % 3 ? 0.25 : 0.5) + 6 * i, i < 4 || i > 5 ? 10 : 5, i % 3 ? 0.175 : 0.25);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							for (var _i = 0; _i < 2; ++_i) {
									for (var j = 0; j < 2; ++j) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 18, 0.25, false);
											blank.position.set(9 + 36 * j, 20, -40 * _i);
											blank.rotation.set(0, 0, -Math.PI / 2);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(27, 7, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(9, 15, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(39, 7, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 12, 0.25, false);
							blank.position.set(42, 6, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							blank = _ShooterEntitiesBlank2.default.create(0.5, 6, 0.25, false);
							blank.position.set(45, 15, 0);
							blank.rotation.set(0, 0, -Math.PI / 2);
							blank.updateMatrix();
							buildingBlanks.merge(blank.geometry, blank.matrix);
	
							for (var _i2 = 0; _i2 < 4; ++_i2) {
									for (var _j = 0; _j < 6; ++_j) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 20, 0.25, _j !== 0);
											blank.position.set(18 * _i2, 10, -8 * _j);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _i3 = 0; _i3 < 10; ++_i3) {
	
									blank = _ShooterEntitiesBlank2.default.create(0.5, _i3 < 4 || _i3 > 5 ? 20 : 10, _i3 % 3 ? 0.25 : 0.5, _i3 % 3 !== 0);
									blank.position.set(6 * _i3, _i3 < 4 || _i3 > 5 ? 10 : 5, -40);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							for (var _i4 = 0; _i4 < 2; ++_i4) {
									for (var _j2 = 0; _j2 < 2; ++_j2) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 0 === _i4 ? 54 : 40, 0.25, false);
	
											if (0 === _i4) {
													blank.position.set(27, 10, -40 * _j2);
													blank.rotation.set(0, 0, -Math.PI / 2);
											} else {
													blank.position.set(54 * _j2, 10, -20);
													blank.rotation.set(-Math.PI / 2, 0, 0);
											}
	
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _i5 = 0; _i5 < 4; ++_i5) {
	
									blank = _ShooterEntitiesBlank2.default.create(0.5, 40, 0.25, false);
									blank.position.set(18 * _i5, 20, -20);
									blank.rotation.set(-Math.PI / 2, 0, 0);
									blank.updateMatrix();
									buildingBlanks.merge(blank.geometry, blank.matrix);
							}
	
							var blank_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/blank.jpg', function (image) {
									blank_texture.image = image;
									blank_texture.needsUpdate = true;
									blank_texture.wrapS = THREE.RepeatWrapping;
									blank_texture.wrapT = THREE.RepeatWrapping;
									blank_texture.repeat.set(5, 5);
							});
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							var door_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/door.jpg', function (image) {
									door_texture.image = image;
									door_texture.needsUpdate = true;
							});
	
							geometry = new THREE.PlaneGeometry(5.7, 8);
							material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(27.2, 3, 0.01);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildStuff',
					value: function buildStuff() {
	
							var stuff = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0,
							    trees = void 0;
	
							stuff = new THREE.Object3D();
	
							geometry = new THREE.ParametricGeometry(function (u, v) {
	
									u = 4 * u - 2;
									v = 8 * v - 4;
									var y = 2 * Math.sqrt(0.03 * u * u + 0.03 * v * v);
	
									return new THREE.Vector3(u, y, v);
							}, 20, 20);
	
							var textile_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/textile.jpg', function (image) {
									textile_texture.image = image;
									textile_texture.needsUpdate = true;
							});
	
							material = new THREE.MeshBasicMaterial({ map: textile_texture, overdraw: true });
							material.side = THREE.DoubleSide;
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(1, 1, -1);
							mesh.rotation.set(0, 0, -Math.PI / 6);
	
							stuff.add(mesh);
	
							mesh = new THREE.Mesh(geometry, material);
							mesh.position.set(-1, 1, -1);
							mesh.rotation.set(0, 0, Math.PI / 6);
	
							stuff.add(mesh);
	
							trees = new THREE.Geometry();
	
							var tree_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tree.jpg', function (image) {
									tree_texture.image = image;
									tree_texture.needsUpdate = true;
							});
	
							geometry = new THREE.CylinderGeometry(0.05, 0.05, 5);
							material = new THREE.MeshBasicMaterial({ map: tree_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(0, 0.75, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, 0);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(1.5, -0.5, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, -Math.PI / 5);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(-1.5, -0.5, 2.75);
							mesh.rotation.set(Math.PI / 36, 0, Math.PI / 5);
	
							mesh.updateMatrix();
							trees.merge(mesh.geometry, mesh.matrix);
	
							mesh = new THREE.Mesh(trees, material);
	
							stuff.add(mesh);
	
							stuff.position.set(9, 2, 3);
							stuff.rotation.set(Math.PI / 9, 0, 0);
	
							this.instance.add(stuff);
	
							var box_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/box1.jpg', function (image) {
									box_texture.image = image;
									box_texture.needsUpdate = true;
							});
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							material = new THREE.MeshBasicMaterial({ map: box_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(7.9, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(10.5, 0.75, 1);
	
							this.instance.add(mesh);
	
							geometry = new THREE.BoxGeometry(2.5, 1.5, 2);
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(7.9, 2.25, 1);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'setPosition',
					value: function setPosition(position) {
							this.instance.position.set(position.x - 27, position.y - 10, position.z + 20);
					}
			}, {
					key: 'setRotation',
					value: function setRotation(rotation) {
							this.instance.translateX(27);
							this.instance.translateY(10);
							this.instance.translateZ(-20);
	
							this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
	
							this.instance.translateX(-27);
							this.instance.translateY(-10);
							this.instance.translateZ(20);
					}
			}]);
	
			return _class;
	}(_ShooterEntitiesBuildersAbstractBuilder2.default);
	
	exports.default = Shooter.Entities.Builders.LargeHouseBuilder;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.AbstractBuilder = function () {
		function _class() {
			_classCallCheck(this, _class);
	
			console.log("> Shooter.Entities.Builders.AbstractBuilder > constructor > ready");
		}
	
		/* INDEPENDENT CONSTRUCTING PARTS */
	
	
		_createClass(_class, [{
			key: "buildFacade",
			value: function buildFacade() {}
		}, {
			key: "buildBlanks",
			value: function buildBlanks() {}
		}, {
			key: "buildWindows",
			value: function buildWindows() {}
		}, {
			key: "buildDoors",
			value: function buildDoors() {}
		}, {
			key: "buildStuff",
			value: function buildStuff() {}
	
			/* CONSTRUCT OBJECT */
	
		}, {
			key: "build",
			value: function build(position, rotation) {
	
				position = position || new THREE.Vector3(0, 0, 0);
				rotation = rotation || new THREE.Vector3(0, 0, 0);
	
				this.instance = new THREE.Object3D();
	
				this.buildFacade();
				this.buildBlanks();
				this.buildWindows();
				this.buildDoors();
				this.buildStuff();
	
				this.setPosition(position);
				this.setRotation(rotation);
	
				return this.instance;
			}
	
			/* OBJECT LOCATION */
	
		}, {
			key: "setPosition",
			value: function setPosition(position) {}
		}, {
			key: "setRotation",
			value: function setRotation(rotation) {}
	
			/* TEXTURE NORMALIZATION */
	
		}, {
			key: "assignUVs",
			value: function assignUVs(geometry) {
	
				geometry.computeBoundingBox();
	
				var max = geometry.boundingBox.max;
				var min = geometry.boundingBox.min;
	
				var offset = new THREE.Vector3(0 - min.x, 0 - min.y, 0 - min.z);
				var range = new THREE.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);
	
				geometry.faceVertexUvs[0] = [];
	
				var faces = geometry.faces;
	
				for (var i = 0; i < geometry.faces.length; i++) {
	
					var v1 = geometry.vertices[faces[i].a];
					var v2 = geometry.vertices[faces[i].b];
					var v3 = geometry.vertices[faces[i].c];
	
					if (v1.x === v2.x && v2.x === v3.x) {
						geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.z + offset.z) / range.z, (v1.y + offset.y) / range.y), new THREE.Vector2((v2.z + offset.z) / range.z, (v2.y + offset.y) / range.y), new THREE.Vector2((v3.z + offset.z) / range.z, (v3.y + offset.y) / range.y)]);
					} else {
						geometry.faceVertexUvs[0].push([new THREE.Vector2((v1.x + offset.x) / range.x, (v1.y + offset.y) / range.y), new THREE.Vector2((v2.x + offset.x) / range.x, (v2.y + offset.y) / range.y), new THREE.Vector2((v3.x + offset.x) / range.x, (v3.y + offset.y) / range.y)]);
					}
				}
	
				geometry.uvsNeedUpdate = true;
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.Builders.AbstractBuilder;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Block = function () {
		function _class() {
			_classCallCheck(this, _class);
		}
	
		_createClass(_class, null, [{
			key: "create",
			value: function create(height, width, depth) {
	
				var geometry = new THREE.BoxGeometry(height, width, depth);
				var instance = new THREE.Mesh(geometry);
	
				return instance;
			}
		}]);
	
		return _class;
	}();
	
	exports.default = Shooter.Entities.Block;

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Blank = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: "create",
					value: function create(width, height, depth, cone) {
	
							var instance = void 0,
							    geometry = void 0,
							    mesh = void 0,
							    container = void 0;
	
							container = new THREE.Geometry();
	
							geometry = new THREE.BoxGeometry(width, height, depth);
							mesh = new THREE.Mesh(geometry);
	
							mesh.updateMatrix();
							container.merge(mesh.geometry, mesh.matrix);
	
							if (true === cone) {
	
									geometry = new THREE.ConeGeometry(depth, 2);
									mesh = new THREE.Mesh(geometry);
	
									mesh.position.set(width / 2 - depth, height / 2 + 1, 0);
	
									mesh.updateMatrix();
									container.merge(mesh.geometry, mesh.matrix);
							}
	
							instance = new THREE.Mesh(container);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Blank;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Window = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var window_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/window.jpg', function (image) {
									window_texture.image = image;
									window_texture.needsUpdate = true;
							});
	
							var geometry = new THREE.PlaneGeometry(4, 4);
							var material = new THREE.MeshBasicMaterial({ map: window_texture, overdraw: true });
							var instance = new THREE.Mesh(geometry, material);
	
							return instance;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Window;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterEntitiesBuildersAbstractBuilder = __webpack_require__(15);
	
	var _ShooterEntitiesBuildersAbstractBuilder2 = _interopRequireDefault(_ShooterEntitiesBuildersAbstractBuilder);
	
	var _ShooterEntitiesBlock = __webpack_require__(16);
	
	var _ShooterEntitiesBlock2 = _interopRequireDefault(_ShooterEntitiesBlock);
	
	var _ShooterEntitiesBlank = __webpack_require__(17);
	
	var _ShooterEntitiesBlank2 = _interopRequireDefault(_ShooterEntitiesBlank);
	
	var _ShooterEntitiesWindow = __webpack_require__(18);
	
	var _ShooterEntitiesWindow2 = _interopRequireDefault(_ShooterEntitiesWindow);
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	Shooter.namespace("Shooter.Entities.Builders");
	
	Shooter.Entities.Builders.MediumHouseBuilder = function (_AbstractBuilder) {
			_inherits(_class, _AbstractBuilder);
	
			function _class() {
					_classCallCheck(this, _class);
	
					var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class).call(this));
	
					console.log("> Shooter.Entities.Builders.MediumHouseBuilder > constructor > ready");
					return _this;
			}
	
			_createClass(_class, [{
					key: 'buildFacade',
					value: function buildFacade() {
	
							var mesh = void 0,
							    material = void 0,
							    block = void 0,
							    buildingBlocks = void 0;
	
							buildingBlocks = new THREE.Geometry();
	
							block = _ShooterEntitiesBlock2.default.create(30, 20, 30);
							block.position.set(15, 10, -15);
							block.updateMatrix();
							buildingBlocks.merge(block.geometry, block.matrix);
	
							var block_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/tower.jpg', function (image) {
									block_texture.image = image;
									block_texture.needsUpdate = true;
									block_texture.wrapS = THREE.RepeatWrapping;
									block_texture.wrapT = THREE.RepeatWrapping;
									block_texture.repeat.set(5, 5);
							});
	
							this.assignUVs(buildingBlocks);
	
							material = new THREE.MeshBasicMaterial({ map: block_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlocks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildWindows',
					value: function buildWindows() {
	
							var gameWindow = void 0;
	
							/* FORWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, 0.01);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(25, 5, 0.01);
							this.instance.add(gameWindow);
	
							/* -------------- */
	
							/* RIGHT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(30.01, 15, -15);
							gameWindow.rotation.set(0, Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
	
							/* BACKWARD WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(15, 15, -30.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(5, 5, -30.01);
							gameWindow.rotation.set(0, Math.PI, 0);
							this.instance.add(gameWindow);
	
							/* ------------- */
	
							/* LEFT WINDOWS */
	
							gameWindow = _ShooterEntitiesWindow2.default.create();
							gameWindow.position.set(-0.01, 5, -15);
							gameWindow.rotation.set(0, -Math.PI / 2, 0);
							this.instance.add(gameWindow);
	
							/* ------------ */
					}
			}, {
					key: 'buildBlanks',
					value: function buildBlanks() {
	
							var mesh = void 0,
							    material = void 0,
							    blank = void 0,
							    buildingBlanks = void 0;
	
							buildingBlanks = new THREE.Geometry();
	
							for (var j = 0; j < 2; ++j) {
	
									for (var i = 0; i < 4; ++i) {
	
											blank = _ShooterEntitiesBlank2.default.create(i % 3 ? 0.5 : 1, 20, i % 3 ? 0.25 : 0.5, true);
											blank.position.set((i % 3 ? 0.25 : 0.5) * (i === 3 ? -1 : 1) + 10 * i, 10, -30 * j);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
	
									for (var _i = 0; _i < 2; ++_i) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 30, 0.25, false);
											blank.position.set(30 * j, 10 + 10 * _i, -15);
											blank.rotation.set(-Math.PI / 2, 0, 0);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							for (var _j = 0; _j < 2; ++_j) {
	
									for (var _i2 = 0; _i2 < 4; ++_i2) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 20, 0.25, _i2 % 3 !== 0);
											blank.position.set(30 * _j, 10, -10 * _i2);
											blank.rotation.set(0, -Math.PI / 2, 0);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
	
									for (var _i3 = 0; _i3 < 2; ++_i3) {
	
											blank = _ShooterEntitiesBlank2.default.create(0.5, 30, 0.25, false);
											blank.position.set(15, 10 + 10 * _i3, -30 * _j);
											blank.rotation.set(0, 0, -Math.PI / 2);
											blank.updateMatrix();
											buildingBlanks.merge(blank.geometry, blank.matrix);
									}
							}
	
							var blank_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/blank.jpg', function (image) {
									blank_texture.image = image;
									blank_texture.needsUpdate = true;
									blank_texture.wrapS = THREE.RepeatWrapping;
									blank_texture.wrapT = THREE.RepeatWrapping;
									blank_texture.repeat.set(5, 5);
							});
	
							this.assignUVs(buildingBlanks);
	
							material = new THREE.MeshBasicMaterial({ map: blank_texture, overdraw: true });
							mesh = new THREE.Mesh(buildingBlanks, material);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildDoors',
					value: function buildDoors() {
	
							var geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							var door_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/door.jpg', function (image) {
									door_texture.image = image;
									door_texture.needsUpdate = true;
							});
	
							geometry = new THREE.PlaneGeometry(4, 8);
							material = new THREE.MeshBasicMaterial({ map: door_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							mesh.position.set(8, 3, 0.01);
	
							this.instance.add(mesh);
					}
			}, {
					key: 'buildStuff',
					value: function buildStuff() {
	
							var stuff = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0,
							    trees = void 0;
					}
			}, {
					key: 'setPosition',
					value: function setPosition(position) {
							this.instance.position.set(position.x - 15, position.y - 10, position.z + 15);
					}
			}, {
					key: 'setRotation',
					value: function setRotation(rotation) {
							this.instance.translateX(15);
							this.instance.translateY(10);
							this.instance.translateZ(-15);
	
							this.instance.rotation.set(rotation.x, rotation.y, rotation.z);
	
							this.instance.translateX(-15);
							this.instance.translateY(-10);
							this.instance.translateZ(15);
					}
			}]);
	
			return _class;
	}(_ShooterEntitiesBuildersAbstractBuilder2.default);
	
	exports.default = Shooter.Entities.Builders.MediumHouseBuilder;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _ShooterGraphicsLoader = __webpack_require__(13);
	
	var _ShooterGraphicsLoader2 = _interopRequireDefault(_ShooterGraphicsLoader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	Shooter.namespace("Shooter.Entities");
	
	Shooter.Entities.Box = function () {
			function _class() {
					_classCallCheck(this, _class);
			}
	
			_createClass(_class, null, [{
					key: 'create',
					value: function create() {
	
							var loader = void 0,
							    geometry = void 0,
							    material = void 0,
							    mesh = void 0;
	
							geometry = new THREE.BoxGeometry(3, 3, 3);
	
							var box_texture = new THREE.Texture();
	
							_ShooterGraphicsLoader2.default.instance.getImage('img/box2.jpg', function (image) {
									box_texture.image = image;
									box_texture.needsUpdate = true;
							});
	
							material = new THREE.MeshBasicMaterial({ map: box_texture, overdraw: true });
							mesh = new THREE.Mesh(geometry, material);
	
							return mesh;
					}
			}]);
	
			return _class;
	}();
	
	exports.default = Shooter.Entities.Box;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTVkYmFiMmY3N2VmOTIwZmVmMTEiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HYW1lL1Nob290ZXIuR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9uYW1lc3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5VdGlscy9TaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLlJlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5Xb3JsZC5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuUGxheWVyLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuRmxvb3IuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzIiwid2VicGFjazovLy8uL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7OztBQUNB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LElBQUksTUFBTSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQVg7O0FBRUEsV0FBSSxjQUFjLElBQUksTUFBTSxPQUFWLEVBQWxCOztBQUVBLHVDQUFPLFFBQVAsQ0FBZ0IsUUFBaEIsQ0FBeUIsY0FBekIsRUFBeUMsVUFBQyxLQUFELEVBQVc7QUFDbkQscUJBQVksS0FBWixHQUFvQixLQUFwQjtBQUNBLHFCQUFZLFdBQVosR0FBMEIsSUFBMUI7QUFDQSxRQUhEOztBQUtBLGtCQUFXLElBQUksTUFBTSxpQkFBVixDQUE0QixFQUFFLEtBQUssV0FBUCxFQUFvQixVQUFVLElBQTlCLEVBQTVCLENBQVg7QUFDQSxjQUFPLElBQUksTUFBTSxJQUFWLENBQWUsUUFBZixFQUF5QixRQUF6QixDQUFQOztBQUVBLGNBQU8sSUFBUDtBQUNBO0FBbkJGOztBQUFBO0FBQUE7O21CQXNCZSxRQUFRLFFBQVIsQ0FBaUIsRyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTVkYmFiMmY3N2VmOTIwZmVmMTFcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgbmFtZXNwYWNlIGZyb20gJy4uL25hbWVzcGFjZS5qcyc7XHJcblxyXG5pbXBvcnQgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanMnO1xyXG5pbXBvcnQgcmVxdWVzdFBvaW50ZXJMb2NrIGZyb20gJy4uL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2suanMnO1xyXG5cclxuaW1wb3J0IFdpbmRvd0NvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLldpbmRvd0NvbnRyb2xsZXIuanMnO1xyXG5cclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlci5qcyc7XHJcbmltcG9ydCBXb3JsZCBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanMnO1xyXG5cclxuU2hvb3Rlci5HYW1lID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLndvcmxkID0gbmV3IFdvcmxkKCk7XHJcblxyXG5cdFx0dGhpcy53aW5kb3dDb250cm9sbGVyID0gV2luZG93Q29udHJvbGxlci5jcmVhdGUodGhpcy53b3JsZC5nZXRDYW1lcmEoKSwgdGhpcy5yZW5kZXJlcik7XHJcblxyXG5cdFx0dGhpcy5GUFMgPSBuZXcgU3RhdHMoKTtcclxuXHRcdHRoaXMuRlBTLnNldE1vZGUoMCk7XHJcblxyXG5cdFx0dGhpcy5GUFMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcblx0XHR0aGlzLkZQUy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcclxuXHRcdHRoaXMuRlBTLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XHJcblxyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLkZQUy5kb21FbGVtZW50KTtcclxuXHJcblx0XHRsZXQgc2VsZiA9IHRoaXM7XHJcblxyXG5cdFx0KGZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcblx0XHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuXHJcblx0XHRcdHNlbGYuRlBTLmJlZ2luKCk7XHJcblxyXG5cdFx0XHRzZWxmLnJlbmRlcigpO1xyXG5cclxuXHRcdFx0c2VsZi5GUFMuZW5kKCk7XHJcblx0XHR9KSgpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyIEdhbWUgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0dGhpcy53b3JsZC51cGRhdGUoKTtcclxuXHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKHRoaXMud29ybGQuZ2V0U2NlbmUoKSwgdGhpcy53b3JsZC5nZXRDYW1lcmEoKSk7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblxyXG5cdC8qIExPQ0sgVEhFIFBPSU5URVIgKi9cclxuXHRyZXF1ZXN0UG9pbnRlckxvY2soKTtcclxuXHJcblx0LyogU1RBUlQgR0FNRSAqL1xyXG5cdGNvbnN0IF9faW5zdGFuY2UgPSBuZXcgU2hvb3Rlci5HYW1lKCk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuR2FtZS9TaG9vdGVyLkdhbWUuanNcbiAqKi8iLCJ3aW5kb3cuU2hvb3RlciA9IChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgU2hvb3RlcikgPyB7fSA6IFNob290ZXI7XHJcblxyXG53aW5kb3cuU2hvb3Rlci5uYW1lc3BhY2UgPSBmdW5jdGlvbiAobmFtZXNwYWNlKSB7XHJcbiAgICBsZXQgcGFydHMgPSBuYW1lc3BhY2Uuc3BsaXQoJy4nKSxcclxuICAgICAgICBwYXJlbnQgPSBTaG9vdGVyO1xyXG5cclxuICAgIGlmIChcIlNob290ZXJcIiA9PT0gcGFydHNbMF0pIHtcclxuICAgICAgICBwYXJ0cyA9IHBhcnRzLnNsaWNlKDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgc2luZ2xlUGFydCBvZiBwYXJ0cykge1xyXG4gICAgICAgIGlmIChcInVuZGVmaW5lZFwiID09PSB0eXBlb2YgcGFyZW50W3NpbmdsZVBhcnRdKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFtzaW5nbGVQYXJ0XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQgPSBwYXJlbnRbc2luZ2xlUGFydF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcmVudDtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL25hbWVzcGFjZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5VdGlsc1wiKTtcclxuXHJcblNob290ZXIuVXRpbHMucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gKCgpID0+IHtcclxuXHRyZXR1cm4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgICAgICAgfHxcclxuXHRcdFx0d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxyXG5cdFx0XHR3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lICAgIHx8XHJcblx0XHRcdHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIFx0ICAgfHxcclxuICAgICAgICBcdHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSBcdCAgIHx8XHJcblx0XHRcdGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XHJcblx0XHRcdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLlV0aWxzLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuVXRpbHMvU2hvb3Rlci5VdGlscy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuVXRpbHNcIik7XHJcblxyXG5TaG9vdGVyLlV0aWxzLnJlcXVlc3RQb2ludGVyTG9jayA9ICgpID0+IHtcclxuXHJcblx0bGV0IGhhdmVQb2ludGVyTG9jayA9ICdwb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICdtb3pQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50IHx8IFxyXG5cdFx0XHRcdFx0XHQgICd3ZWJraXRQb2ludGVyTG9ja0VsZW1lbnQnIGluIGRvY3VtZW50O1xyXG5cclxuXHRpZihoYXZlUG9pbnRlckxvY2spIHtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIlNob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrID4gUG9pbnRlciBMb2NrIEFQSSB3YXMgZm91bmRlZC5cIik7XHJcblxyXG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuXHRcdGxldCBsb2NrUG9pbnRlciA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0Ym9keS5yZXF1ZXN0UG9pbnRlckxvY2sgPSBib2R5LnJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5Lm1velJlcXVlc3RQb2ludGVyTG9jayB8fCBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBib2R5LndlYmtpdFJlcXVlc3RQb2ludGVyTG9jaztcclxuXHJcblx0XHRcdGJvZHkucmVxdWVzdFBvaW50ZXJMb2NrKCk7XHJcblxyXG5cdFx0fTtcclxuXHJcblx0XHRib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9ja1BvaW50ZXIsIGZhbHNlKTtcclxuXHJcblx0fSBlbHNlIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBQb2ludGVyIExvY2sgQVBJLlwiKTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5VdGlscy5yZXF1ZXN0UG9pbnRlckxvY2s7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLlV0aWxzL1Nob290ZXIuVXRpbHMucmVxdWVzdFBvaW50ZXJMb2NrLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlciA9IGNsYXNzIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sbGVyIHtcclxuXHJcblx0Y29uc3RydWN0b3IoY2FtZXJhLCByZW5kZXJlcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdFxyXG5cdFx0dGhpcy5jYW1lcmEgPSBjYW1lcmE7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXIucmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbldpbmRvd1Jlc2l6ZSA9ICgpID0+IHtcclxuXHJcblx0XHRcdHRoaXMuY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0XHR0aGlzLmNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7IHRoaXMub25XaW5kb3dSZXNpemUoZXZlbnQpOyB9LCBmYWxzZSApO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vemZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLCAoZXZlbnQpID0+IHsgdGhpcy5vbldpbmRvd1Jlc2l6ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ01TRnVsbHNjcmVlbkNoYW5nZScsIChldmVudCkgPT4geyB0aGlzLm9uV2luZG93UmVzaXplKGV2ZW50KTsgfSwgZmFsc2UpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShjYW1lcmEsIHJlbmRlcmVyKSB7XHJcblxyXG5cdFx0bGV0IGNvbnRyb2xsZXIgPSBuZXcgU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyKGNhbWVyYSwgcmVuZGVyZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuV2luZG93Q29udHJvbGxlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuQ29udHJvbGxlcnMvU2hvb3Rlci5Db250cm9sbGVycy5XaW5kb3dDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIgPSBjbGFzcyB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHRcdHRoaXMuYXR0YWNoRXZlbnRzKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdGF0dGFjaEV2ZW50cygpIHsgfVxyXG5cdGRldGFjaEV2ZW50cygpIHsgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkdyYXBoaWNzXCIpO1xyXG5cclxuU2hvb3Rlci5HcmFwaGljcy5SZW5kZXJlciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyID4gY29uc3RydWN0b3IgPiByZWFkeVwiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcihzY2VuZSwgY2FtZXJhKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xyXG5cdH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuR3JhcGhpY3MuUmVuZGVyZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuUmVuZGVyZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5QbGF5ZXIuanMnO1xyXG5pbXBvcnQgRmxvb3IgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkZsb29yLmpzJztcclxuXHJcbmltcG9ydCBMYXJnZUhvdXNlQnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qcyc7XHJcbmltcG9ydCBNZWRpdW1Ib3VzZUJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTWVkaXVtSG91c2VCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5pbXBvcnQgQm94IGZyb20gJy4vU2hvb3Rlci5FbnRpdGllcy5Cb3guanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblxyXG5cdFx0dGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG5cclxuXHRcdHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLnNjZW5lKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMucGxheWVyLmdldENvbnRyb2xzKCkpO1xyXG5cclxuXHRcdHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIgPSBuZXcgTGFyZ2VIb3VzZUJ1aWxkZXIoKTtcclxuXHRcdHRoaXMubWVkaXVtSG91c2VCdWlsZGVyID0gbmV3IE1lZGl1bUhvdXNlQnVpbGRlcigpO1xyXG5cclxuXHRcdGxldCBidWlsZGluZyA9IHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoMzAsIDEwLCAtNDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubGFyZ2VIb3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoMTgwLCAxMCwgLTEwMCksIG5ldyBUSFJFRS5WZWN0b3IzKDAsIE1hdGguUEkgLyAyLCAwKSk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChidWlsZGluZyk7XHJcblxyXG5cdFx0YnVpbGRpbmcgPSB0aGlzLm1lZGl1bUhvdXNlQnVpbGRlci5idWlsZChuZXcgVEhSRUUuVmVjdG9yMyg4NSwgMTAsIC0zNSkpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cclxuXHRcdGJ1aWxkaW5nID0gdGhpcy5tZWRpdW1Ib3VzZUJ1aWxkZXIuYnVpbGQobmV3IFRIUkVFLlZlY3RvcjMoMTM1LCAxMCwgLTM1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgTWF0aC5QSSAvIDIsIDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDMwLCAxMCwgNTUpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtTWF0aC5QSSAvIDIsIDApKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDcwLCAxMCwgNTUpKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJ1aWxkaW5nKTtcclxuXHJcblx0XHRidWlsZGluZyA9IHRoaXMubWVkaXVtSG91c2VCdWlsZGVyLmJ1aWxkKG5ldyBUSFJFRS5WZWN0b3IzKDExMCwgMTAsIDU1KSwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgTWF0aC5QSSwgMCkpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYnVpbGRpbmcpO1xyXG5cclxuXHRcdGxldCBib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDE4LCAxLjUsIDM4LjUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KDIxLCAxLjUsIDM4LjUpO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblxyXG5cdFx0LyogR1JFRU4gUE9JTlQgUkVTUEFXTiAqL1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTMwLCAxLjUsIDcwKTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDQsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCAxLjUsIDc0KTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMS41LCA3Nyk7XHJcblx0XHR0aGlzLnNjZW5lLmFkZChib3gpO1xyXG5cclxuXHRcdGJveCA9IEJveC5jcmVhdGUoKTtcclxuXHRcdGJveC5wb3NpdGlvbi5zZXQoLTI4LjUsIDEuNSwgODApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHRib3ggPSBCb3guY3JlYXRlKCk7XHJcblx0XHRib3gucG9zaXRpb24uc2V0KC0yOC41LCA0LjUsIDgwKTtcclxuXHRcdHRoaXMuc2NlbmUuYWRkKGJveCk7XHJcblxyXG5cdFx0Ym94ID0gQm94LmNyZWF0ZSgpO1xyXG5cdFx0Ym94LnBvc2l0aW9uLnNldCgtMjguNSwgMi4xLCA4My42KTtcclxuXHRcdGJveC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDQsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoYm94KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cclxuXHRcdGxldCBmbG9vciA9IEZsb29yLmNyZWF0ZSgpO1xyXG5cdFx0Zmxvb3IucG9zaXRpb24uc2V0KC0xMDAwLCAwLCAtMTAwMCk7XHJcblx0XHRmbG9vci5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0dGhpcy5zY2VuZS5hZGQoZmxvb3IpO1xyXG5cclxuXHRcdC8qIFNLWSBTUEhFUkUgKi9cclxuXHJcblx0XHRsZXQgc2t5X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3NreXNwaGVyZS5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0c2t5X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0c2t5X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDIwMDAsIDMyLCAzMik7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHNreV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5zY2VuZS5hZGQoc2t5KTtcclxuXHRcdC8qIC0tLS0tLS0tLS0gKi9cclxuXHJcblxyXG5cdFx0LyogREVTRVJUICovXHJcblxyXG5cdFx0LypsZXQgZGVzZXJ0X3RleHR1cmUsIGxvYWRlcjtcclxuXHJcblx0XHRkZXNlcnRfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblx0XHRsb2FkZXIgPSBuZXcgVEhSRUUuSW1hZ2VMb2FkZXIoKTtcclxuXHJcblx0XHRsb2FkZXIubG9hZCgnaW1nL2Rlc2VydC5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0ZGVzZXJ0X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGFyYW1ldHJpY0dlb21ldHJ5KCh1LCB2KSA9PiB7XHJcblxyXG5cdFx0XHR1ID0gMTAwMCAqIHU7XHJcblx0XHRcdHYgPSAxMDAwICogdjtcclxuXHRcdFx0bGV0IHkgPSA2MCAqIE1hdGguYWJzKE1hdGguc2luKE1hdGgucG93KHUgKiB2LCAxIC8gNSkpKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgVEhSRUUuVmVjdG9yMyh1LCB5LCB2KTtcclxuXHRcdH0sIDIwLCAyMCk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGRlc2VydF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGN1cnZlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi54ID0gLTEwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueiA9IC0zMDA7XHJcblx0XHRjdXJ2ZS5wb3NpdGlvbi55ID0gLTEwO1xyXG5cclxuXHRcdGN1cnZlLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7XHJcblxyXG5cdFx0Y3VydmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdGN1cnZlLnBvc2l0aW9uLnggPSAxMDtcclxuXHRcdGN1cnZlLnBvc2l0aW9uLnogPSAtMzAwO1xyXG5cdFx0Y3VydmUucG9zaXRpb24ueSA9IC0xMDtcclxuXHJcblx0XHRjdXJ2ZS5yb3RhdGlvbi55ID0gTWF0aC5QSTtcclxuXHJcblx0XHR0aGlzLnNjZW5lLmFkZChjdXJ2ZSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHQvKiBTS1kgKi9cclxuXHJcblx0XHQvKmdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDMwMDApO1xyXG5cclxuXHRcdGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuXHRcdGxldCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdFx0Y29udGV4dC5jYW52YXMud2lkdGggPSAzMDAwO1xyXG5cdFx0Y29udGV4dC5jYW52YXMuaGVpZ2h0ID0gMzAwMDtcclxuXHJcblx0XHRsZXQgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDE1MDAsIDE1MDAsIDMwLCAxNTAwLCAxNTAwLCA3MDApO1xyXG5cclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAnd2hpdGUnKTtcclxuXHRcdGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjEsICcjQUFBOEZGJyk7XHJcblx0XHRncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJyM1MDRERkYnKTtcclxuXHJcblx0XHRjb250ZXh0LmFyYygxNTAwLCAxNTAwLCAzMDAwLCAwLCAyICogTWF0aC5QSSk7XHJcblxyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuXHRcdGNvbnRleHQuZmlsbCgpO1xyXG5cclxuXHRcdGxldCBzaGFkb3dUZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoY2FudmFzKTtcclxuXHRcdHNoYWRvd1RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHtcclxuXHRcdFx0bWFwOiBzaGFkb3dUZXh0dXJlLFxyXG5cdFx0XHRzaWRlOiBUSFJFRS5CYWNrU2lkZVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IHNreSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c2t5LnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDI7XHJcblx0XHRza3kucm90YXRpb24ueiA9IE1hdGguUEkgLyA5O1xyXG5cclxuXHRcdHRoaXMuc2NlbmUuYWRkKHNreSk7Ki9cclxuXHJcblx0XHQvKiAtLS0tLS0gKi9cclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5Xb3JsZCA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoKSB7XHJcblx0XHR0aGlzLnBsYXllci51cGRhdGUodGhpcy5zY2VuZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTY2VuZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLnNjZW5lO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtZXJhKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucGxheWVyLmdldENhbWVyYSgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV29ybGQ7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuV29ybGQuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5pbXBvcnQgQ09OU1RBTlRTIGZyb20gJy4uL1Nob290ZXIuQ29uc3RhbnRzL1Nob290ZXIuQ29uc3RhbnRzLmpzJztcclxuXHJcbmltcG9ydCBLZXlib2FyZENvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLktleWJvYXJkQ29udHJvbGxlci5qcyc7XHJcbmltcG9ydCBNb3VzZUNvbnRyb2xsZXIgZnJvbSAnLi4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLlBsYXllciA9IGNsYXNzIHtcclxuXHJcblx0Y29uc3RydWN0b3Ioc2NlbmUpIHtcclxuXHJcblx0XHR0aGlzLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVMZWZ0ID0gZmFsc2U7XHJcblx0XHR0aGlzLm1vdmVCYWNrd2FyZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5tb3ZlUmlnaHQgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0dGhpcy5qdW1waW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gPSBNYXRoLlBJIC8gMjtcclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg0NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDEsIDEwMDAwKTtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldCgtNDAsIDMsIDgwKTtcclxuXHRcdHRoaXMuY2FtZXJhLmxvb2tBdCgwLCAwLCAtMSk7XHJcblxyXG5cdFx0dGhpcy5rZXlib2FyZENvbnRyb2xsZXIgPSBLZXlib2FyZENvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cdFx0dGhpcy5tb3VzZUNvbnRyb2xsZXIgPSBNb3VzZUNvbnRyb2xsZXIuY3JlYXRlKHRoaXMpO1xyXG5cclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLlBsYXllciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoc2NlbmUpIHtcclxuXHJcblx0XHRsZXQgd29ybGREaXJlY3Rpb24gPSB0aGlzLmNhbWVyYS5nZXRXb3JsZERpcmVjdGlvbigpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblx0XHRcclxuXHRcdGxldCBzdHJhZmUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0c3RyYWZlLmNyb3NzVmVjdG9ycyh3b3JsZERpcmVjdGlvbiwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKENPTlNUQU5UUy5NT1ZFTUVOVF9TUEVFRCk7XHJcblxyXG5cdFx0bGV0IGZvcndhcmQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0Zm9yd2FyZC5jcm9zc1ZlY3RvcnMoc3RyYWZlLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSkubm9ybWFsaXplKCkubXVsdGlwbHlTY2FsYXIoQ09OU1RBTlRTLk1PVkVNRU5UX1NQRUVEKTtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nICYmICF0aGlzLmZhbGxpbmcpIHtcclxuXHJcblx0XHRcdHRoaXMubW92aW5nVmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVGb3J3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3Iuc3ViKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVMZWZ0KSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3Iuc3ViKHN0cmFmZSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmKHRoaXMubW92ZUJhY2t3YXJkKSB7XHJcblx0XHRcdFx0dGhpcy5tb3ZpbmdWZWN0b3IuYWRkKGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZih0aGlzLm1vdmVSaWdodCkge1xyXG5cdFx0XHRcdHRoaXMubW92aW5nVmVjdG9yLmFkZChzdHJhZmUpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnggKz0gdGhpcy5tb3ZpbmdWZWN0b3IueDtcclxuXHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogKz0gdGhpcy5tb3ZpbmdWZWN0b3IuejtcclxuXHJcblx0XHR0aGlzLmdyYXZpdGF0aW9uKHNjZW5lKTtcclxuXHJcblx0XHRpZih0aGlzLmp1bXBpbmcpIHtcclxuXHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblxyXG5cdFx0XHRvcmlnaW5Qb2ludC55ICs9IDE7IC8vIHByZXZlbnQgaW50ZXJzZWN0aW9uIHdpdGggdGhlIGdyb3VuZCBhbmQgZ3JpZC5cclxuXHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHRcdGxldCBjb2xsaXNpb25SZXN1bHRzID0gcmF5LmludGVyc2VjdE9iamVjdHMoc2NlbmUuY2hpbGRyZW4pO1xyXG5cclxuXHRcdFx0aWYodGhpcy5qdW1waW5nU2F0dXJhdGlvbiA8PSAwIHx8IFxyXG5cdFx0XHRcdChjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCA+IDAgJiYgY29sbGlzaW9uUmVzdWx0c1swXS5kaXN0YW5jZSA8IDEuMjUpKSB7XHJcblxyXG5cdFx0XHRcdHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0dGhpcy5qdW1waW5nU2F0dXJhdGlvbiA9IDA7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRsZXQgYWRkSGVpZ2h0ID0gQ09OU1RBTlRTLkpVTVBfU1RSRU5HVEggKiBNYXRoLnNpbih0aGlzLmp1bXBpbmdTYXR1cmF0aW9uKTtcclxuXHRcdFx0XHR0aGlzLmNhbWVyYS5wb3NpdGlvbi55ICs9IGFkZEhlaWdodDtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uIC09IE1hdGguUEkgLyBDT05TVEFOVFMuR1JBVklUWTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZih0aGlzLmZhbGxpbmcpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBvcmlnaW5Qb2ludCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uLmNsb25lKCk7XHJcblx0XHRcdGxldCByYXkgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKG9yaWdpblBvaW50LCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKGNvbGxpc2lvblJlc3VsdHMubGVuZ3RoID4gMCAmJiBjb2xsaXNpb25SZXN1bHRzWzBdLmRpc3RhbmNlIDwgMykge1xyXG5cclxuXHRcdFx0XHR0aGlzLmZhbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5QSSAvIDI7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSBNYXRoLm1heCh0aGlzLmNhbWVyYS5wb3NpdGlvbi55LCAzKTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdGxldCBhZGRIZWlnaHQgPSBDT05TVEFOVFMuSlVNUF9TVFJFTkdUSCAqIE1hdGguc2luKHRoaXMuanVtcGluZ1NhdHVyYXRpb24pO1xyXG5cdFx0XHRcdHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgLT0gYWRkSGVpZ2h0O1xyXG5cdFx0XHRcdHRoaXMuanVtcGluZ1NhdHVyYXRpb24gKz0gTWF0aC5QSSAvIENPTlNUQU5UUy5HUkFWSVRZO1xyXG5cclxuXHRcdFx0XHR0aGlzLmp1bXBpbmdTYXR1cmF0aW9uID0gTWF0aC5taW4odGhpcy5qdW1waW5nU2F0dXJhdGlvbiwgTWF0aC5QSSAvIDIpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z3Jhdml0YXRpb24oc2NlbmUpIHtcclxuXHJcblx0XHRpZighdGhpcy5qdW1waW5nKSB7XHJcblxyXG5cdFx0XHRsZXQgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3Rlcih0aGlzLmNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAtMSwgMCkpO1xyXG5cdFx0XHRsZXQgY29sbGlzaW9uUmVzdWx0cyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKHNjZW5lLmNoaWxkcmVuKTtcclxuXHJcblx0XHRcdGlmKCFjb2xsaXNpb25SZXN1bHRzLmxlbmd0aCB8fCAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPiAyKSkge1xyXG5cdFx0XHRcdHRoaXMuZmFsbGluZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldENhbWVyYSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmNhbWVyYTtcclxuXHR9XHJcblxyXG5cdGdldENvbnRyb2xzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMubW91c2VDb250cm9sbGVyLmdldE9iamVjdCgpO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuUGxheWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLlBsYXllci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIuQ29uc3RhbnRzID0ge1xyXG5cclxuXHQvKiBDT05UUk9MUyAqL1xyXG5cdEtFWVM6IHtcclxuXHJcblx0XHRXOiA4NyxcclxuXHRcdEE6IDY1LFxyXG5cdFx0UzogODMsXHJcblx0XHREOiA2OCxcclxuXHJcblx0XHRBUlJPV19VUDogMzgsXHJcblx0XHRBUlJPV19MRUZUOiAzNyxcclxuXHRcdEFSUk9XX0RPV046IDQwLFxyXG5cdFx0QVJST1dfUklHSFQ6IDM5LFxyXG5cclxuXHRcdFdISVRFU1BBQ0U6IDMyXHJcblx0fSxcclxuXHJcblx0Q1VSU09SX1NQRUVEOiAwLjAwMixcclxuXHJcblx0LyogUEhZU0lDICovXHJcblx0SlVNUF9TVFJFTkdUSDogMC41LFxyXG5cdEdSQVZJVFk6IDUwLFxyXG5cdE1PVkVNRU5UX1NQRUVEOiAwLjI1XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db25zdGFudHM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5Db250cm9sbGVyc1wiKTtcclxuXHJcbmltcG9ydCBDT05TVEFOVFMgZnJvbSAnLi4vU2hvb3Rlci5Db25zdGFudHMvU2hvb3Rlci5Db25zdGFudHMuanMnO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0Q29udHJvbGxlciBmcm9tICcuL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyL1Nob290ZXIuQ29udHJvbGxlcnMuQWJzdHJhY3RDb250cm9sbGVyLmpzJztcclxuXHJcblNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xsZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcihwbGF5ZXIpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHRcclxuXHRcdHRoaXMucGxheWVyID0gcGxheWVyO1xyXG5cdH1cclxuXHJcblx0YXR0YWNoRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XHJcblxyXG5cdFx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuVzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX1VQOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlRm9yd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuUzpcclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkFSUk9XX0RPV046IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVCYWNrd2FyZCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5EOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfUklHSFQ6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVSaWdodCA9IHRydWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XSElURVNQQUNFOiB7XHJcblx0XHRcdFx0XHRpZighdGhpcy5wbGF5ZXIuZmFsbGluZykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLm9uS2V5VXAgPSAoZXZlbnQpID0+IHtcclxuXHJcblx0XHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5XOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfVVA6IHtcclxuXHRcdFx0XHRcdHRoaXMucGxheWVyLm1vdmVGb3J3YXJkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BOlxyXG5cdFx0XHRcdGNhc2UgQ09OU1RBTlRTLktFWVMuQVJST1dfTEVGVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZUxlZnQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLlM6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19ET1dOOiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsYXllci5tb3ZlQmFja3dhcmQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlIENPTlNUQU5UUy5LRVlTLkQ6XHJcblx0XHRcdFx0Y2FzZSBDT05TVEFOVFMuS0VZUy5BUlJPV19SSUdIVDoge1xyXG5cdFx0XHRcdFx0dGhpcy5wbGF5ZXIubW92ZVJpZ2h0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblxyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHsgc2VsZi5vbktleURvd24oZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4geyBzZWxmLm9uS2V5VXAoZXZlbnQpOyB9LCBmYWxzZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgY3JlYXRlKHBsYXllcikge1xyXG5cclxuXHRcdGxldCBjb250cm9sbGVyID0gbmV3IFNob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyKHBsYXllcik7XHJcblxyXG5cdFx0cmV0dXJuIGNvbnRyb2xsZXI7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5Db250cm9sbGVycy5LZXlib2FyZENvbnRyb2xsZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkNvbnRyb2xsZXJzL1Nob290ZXIuQ29udHJvbGxlcnMuS2V5Ym9hcmRDb250cm9sbGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkNvbnRyb2xsZXJzXCIpO1xyXG5cclxuaW1wb3J0IENPTlNUQU5UUyBmcm9tICcuLi9TaG9vdGVyLkNvbnN0YW50cy9TaG9vdGVyLkNvbnN0YW50cy5qcyc7XHJcblxyXG5pbXBvcnQgQWJzdHJhY3RDb250cm9sbGVyIGZyb20gJy4vU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIvU2hvb3Rlci5Db250cm9sbGVycy5BYnN0cmFjdENvbnRyb2xsZXIuanMnO1xyXG5cclxuU2hvb3Rlci5Db250cm9sbGVycy5Nb3VzZUNvbnRyb2xsZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0Q29udHJvbGxlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHBsYXllcikge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHJcblx0XHR0aGlzLnBsYXllci5jYW1lcmEucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMucGl0Y2hPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMucGl0Y2hPYmplY3QuYWRkKCk7XHJcblxyXG5cdFx0dGhpcy55YXdPYmplY3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHRcdHRoaXMueWF3T2JqZWN0LmFkZCh0aGlzLnBpdGNoT2JqZWN0KTtcclxuXHJcblx0XHR0aGlzLlBJXzIgPSAtMC4xICsgTWF0aC5QSSAvIDI7IC8vIC0wLjEgaXMgdGhlIEVwc2lsb24gZm9yIGdpbWJhbCBsb2NrIHByZXZlbnQuXHJcblx0fVxyXG5cclxuXHRhdHRhY2hFdmVudHMoKSB7XHJcblxyXG5cdFx0dGhpcy5vbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG5cclxuXHRcdFx0bGV0IG1vdmVtZW50WCA9IGV2ZW50Lm1vdmVtZW50WCB8fCBldmVudC5tb3pNb3ZlbWVudFggfHwgZXZlbnQud2Via2l0TW92ZW1lbnRYIHx8IDA7XHJcblx0XHRcdGxldCBtb3ZlbWVudFkgPSBldmVudC5tb3ZlbWVudFkgfHwgZXZlbnQubW96TW92ZW1lbnRZIHx8IGV2ZW50LndlYmtpdE1vdmVtZW50WSB8fCAwO1xyXG5cclxuXHRcdFx0dGhpcy55YXdPYmplY3Qucm90YXRpb24ueSAtPSBtb3ZlbWVudFggKiBDT05TVEFOVFMuQ1VSU09SX1NQRUVEO1xyXG5cdFx0XHR0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggLT0gbW92ZW1lbnRZICogQ09OU1RBTlRTLkNVUlNPUl9TUEVFRDtcclxuXHJcblx0XHRcdHRoaXMucGl0Y2hPYmplY3Qucm90YXRpb24ueCA9IE1hdGgubWF4KCAtdGhpcy5QSV8yLCBNYXRoLm1pbiggdGhpcy5QSV8yLCB0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLnggKSApO1xyXG5cclxuXHRcdFx0bGV0IGRpcmVjdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIC0xKTtcclxuXHRcdFx0bGV0IHJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDAsIFwiWVhaXCIpO1xyXG5cdFx0XHRsZXQgbG9va0F0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRcdHJvdGF0aW9uLnNldCh0aGlzLnBpdGNoT2JqZWN0LnJvdGF0aW9uLngsIHRoaXMueWF3T2JqZWN0LnJvdGF0aW9uLnksIDApO1xyXG5cclxuXHRcdFx0bG9va0F0LmNvcHkoZGlyZWN0aW9uKS5hcHBseUV1bGVyKHJvdGF0aW9uKTtcclxuXHJcblx0XHRcdGxvb2tBdC54ICs9IHRoaXMucGxheWVyLmNhbWVyYS5wb3NpdGlvbi54O1xyXG5cdFx0XHRsb29rQXQueSArPSB0aGlzLnBsYXllci5jYW1lcmEucG9zaXRpb24ueTtcclxuXHRcdFx0bG9va0F0LnogKz0gdGhpcy5wbGF5ZXIuY2FtZXJhLnBvc2l0aW9uLno7XHJcblxyXG5cdFx0XHR0aGlzLnBsYXllci5jYW1lcmEubG9va0F0KGxvb2tBdCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHsgc2VsZi5vbk1vdXNlTW92ZShldmVudCk7IH0sIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdGdldE9iamVjdCgpIHtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy55YXdPYmplY3Q7XHJcblxyXG5cdH1cclxuXHJcblx0c3RhdGljIGNyZWF0ZShwbGF5ZXIpIHtcclxuXHJcblx0XHRsZXQgY29udHJvbGxlciA9IG5ldyBTaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlcihwbGF5ZXIpO1xyXG5cclxuXHRcdHJldHVybiBjb250cm9sbGVyO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuQ29udHJvbGxlcnMuTW91c2VDb250cm9sbGVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5Db250cm9sbGVycy9TaG9vdGVyLkNvbnRyb2xsZXJzLk1vdXNlQ29udHJvbGxlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkZsb29yID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKCkge1xyXG5cclxuXHRcdGxldCBmbG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9mbG9vci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0Zmxvb3JfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRmbG9vcl90ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGZsb29yX3RleHR1cmUucmVwZWF0LnNldCgxMDAsIDEwMCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgzMDAwLCAzMDAwLCA0MCwgNDApO1xyXG5cdFx0bGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBmbG9vcl90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlO1xyXG5cdFx0bGV0IGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5GbG9vcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5GbG9vci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5HcmFwaGljc1wiKTtcclxuXHJcbmxldCBfaW5zdGFuY2UgPSBTeW1ib2woKTtcclxuXHJcblNob290ZXIuR3JhcGhpY3MuTG9hZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMubG9hZGVyID0gbmV3IFRIUkVFLkltYWdlTG9hZGVyKCk7XHJcblx0fVxyXG5cclxuXHRnZXRJbWFnZShwYXRoLCBjYWxsYmFjaykge1xyXG5cdFx0dGhpcy5sb2FkZXIubG9hZChwYXRoLCAoaW1hZ2UpID0+IHsgY2FsbGJhY2soaW1hZ2UpOyB9KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcblx0XHRpZighdGhpc1tfaW5zdGFuY2VdKSB7XHJcblx0XHRcdHRoaXNbX2luc3RhbmNlXSA9IG5ldyBTaG9vdGVyLkdyYXBoaWNzLkxvYWRlcigpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXNbX2luc3RhbmNlXTtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkdyYXBoaWNzL1Nob290ZXIuR3JhcGhpY3MuTG9hZGVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuU2hvb3Rlci5uYW1lc3BhY2UoXCJTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzXCIpO1xyXG5cclxuaW1wb3J0IEFic3RyYWN0QnVpbGRlciBmcm9tICcuL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyLmpzJztcclxuXHJcbmltcG9ydCBCbG9jayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsb2NrLmpzJztcclxuaW1wb3J0IEJsYW5rIGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuQmxhbmsuanMnO1xyXG5pbXBvcnQgV2luZG93IGZyb20gJy4uL1Nob290ZXIuRW50aXRpZXMuV2luZG93LmpzJztcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkxhcmdlSG91c2VCdWlsZGVyID0gY2xhc3MgZXh0ZW5kcyBBYnN0cmFjdEJ1aWxkZXIge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblxyXG5cdFx0Y29uc29sZS5sb2coXCI+IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoNTQsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMjcsIDUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsb2NrID0gQmxvY2suY3JlYXRlKDE4LCAxMCwgNDApO1xyXG5cdFx0YmxvY2sucG9zaXRpb24uc2V0KDQ1LCAxNSwgLTIwKTtcclxuXHRcdGJsb2NrLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbG9ja3MubWVyZ2UoYmxvY2suZ2VvbWV0cnksIGJsb2NrLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMTgsIDEwLCA0MCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoOSwgMTUsIC0yMCk7XHJcblx0XHRibG9jay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxvY2tzLm1lcmdlKGJsb2NrLmdlb21ldHJ5LCBibG9jay5tYXRyaXgpO1xyXG5cclxuXHRcdGxldCBibG9ja190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy90b3dlci5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUucmVwZWF0LnNldCgxMCwgNSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0Jsb2Nrcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsb2NrX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IGdhbWVXaW5kb3c7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDkuMywgMTIuNSwgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDQ1LjMsIDEyLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NS4zLCAzLjUsIDAuMDEpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIFJJR0hUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNTQuMDEsIDE1LCAtMTIpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCA1LCAtMjgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDU0LjAxLCAxNSwgLTM2KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoOSwgMTUsIC00MC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCg0NSwgMTUsIC00MC4wMSk7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBMRUZUIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoLTAuMDEsIDE1LCAtMjgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgLU1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgMTUsIC0xMik7XHJcblx0XHRnYW1lV2luZG93LnJvdGF0aW9uLnNldCgwLCAtTWF0aC5QSSAvIDIsIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tICovXHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgoaSAlIDMgPyAwLjUgOiAxKSwgKGkgPCA0IHx8IGkgPiA1ID8gMjAgOiAxMCksIChpICUgMyA/IDAuMjUgOiAwLjUpLCB0cnVlKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICsgNiAqIGksIChpIDwgNCB8fCBpID4gNSA/IDEwIDogNSksIChpICUgMyA/IDAuMTc1IDogMC4yNSkpO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAyOyArK2kpIHtcclxuXHRcdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDE4LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDkgKyAzNiAqIGosIDIwLCAtNDAgKiBpKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDYsIDAuMjUsIGZhbHNlKTtcclxuXHRcdGJsYW5rLnBvc2l0aW9uLnNldCgyNywgNywgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCA2LCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoOSwgMTUsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDM5LCA3LCAwKTtcclxuXHRcdGJsYW5rLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDIpO1xyXG5cdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDEyLCAwLjI1LCBmYWxzZSk7XHJcblx0XHRibGFuay5wb3NpdGlvbi5zZXQoNDIsIDYsIDApO1xyXG5cdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNiwgMC4yNSwgZmFsc2UpO1xyXG5cdFx0YmxhbmsucG9zaXRpb24uc2V0KDQ1LCAxNSwgMCk7XHJcblx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cdFx0XHRmb3IobGV0IGogPSAwOyBqIDwgNjsgKytqKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMjAsIDAuMjUsIGogIT09IDApO1xyXG5cdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgxOCAqIGksIDEwLCAtOCAqIGopO1xyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgKytpKSB7XHJcblxyXG5cdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIChpIDwgNCB8fCBpID4gNSA/IDIwIDogMTApLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgKGkgJSAzKSAhPT0gMCk7XHJcblx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCg2ICogaSwgKGkgPCA0IHx8IGkgPiA1ID8gMTAgOiA1KSwgLTQwKTtcclxuXHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoMC41LCAoMCA9PT0gaSA/IDU0IDogNDApLCAwLjI1LCBmYWxzZSk7XHJcblxyXG5cdFx0XHRcdGlmKDAgPT09IGkpIHtcclxuXHRcdFx0XHRcdGJsYW5rLnBvc2l0aW9uLnNldCgyNywgMTAsIC00MCAqIGopO1xyXG5cdFx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIDAsIC1NYXRoLlBJIC8gMik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDU0ICogaiwgMTAsIC0yMCk7XHJcblx0XHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGJsYW5rLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRcdGJ1aWxkaW5nQmxhbmtzLm1lcmdlKGJsYW5rLmdlb21ldHJ5LCBibGFuay5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgNDAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KDE4ICogaSwgMjAsIC0yMCk7XHJcblx0XHRcdGJsYW5rLnJvdGF0aW9uLnNldCgtTWF0aC5QSSAvIDIsIDAsIDApO1xyXG5cdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBibGFua190ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9ibGFuay5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUucmVwZWF0LnNldCg1LCA1KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYXNzaWduVVZzKGJ1aWxkaW5nQmxhbmtzKTtcclxuXHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogYmxhbmtfdGV4dHVyZSwgb3ZlcmRyYXc6IHRydWUgfSk7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goYnVpbGRpbmdCbGFua3MsIG1hdGVyaWFsKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdGJ1aWxkRG9vcnMoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5LCBtYXRlcmlhbCwgbWVzaDtcclxuXHJcblx0XHRsZXQgZG9vcl90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy9kb29yLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRkb29yX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0ZG9vcl90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNS43LCA4KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMjcuMiwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0XHRzdHVmZiA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBhcmFtZXRyaWNHZW9tZXRyeSgodSwgdikgPT4ge1xyXG5cclxuXHRcdFx0dSA9IDQgKiB1IC0gMjtcclxuXHRcdFx0diA9IDggKiB2IC0gNDtcclxuXHRcdFx0bGV0IHkgPSAyICogTWF0aC5zcXJ0KDAuMDMgKiB1ICogdSArIDAuMDMgKiB2ICogdik7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFRIUkVFLlZlY3RvcjModSwgeSwgdik7XHJcblxyXG5cdFx0fSwgMjAsIDIwKTtcclxuXHJcblx0XHRsZXQgdGV4dGlsZV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy90ZXh0aWxlLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHR0ZXh0aWxlX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0dGV4dGlsZV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0aWxlX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWF0ZXJpYWwuc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgxLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCAtTWF0aC5QSSAvIDYpO1xyXG5cclxuXHRcdHN0dWZmLmFkZChtZXNoKTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KC0xLCAxLCAtMSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldCgwLCAwLCBNYXRoLlBJIC8gNik7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHJcblxyXG5cdFx0dHJlZXMgPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuXHJcblx0XHRsZXQgdHJlZV90ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoKTtcclxuXHJcblx0XHRMb2FkZXIuaW5zdGFuY2UuZ2V0SW1hZ2UoJ2ltZy90cmVlLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHR0cmVlX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0dHJlZV90ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4wNSwgMC4wNSwgNSk7XHJcblx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdHJlZV90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDAsIDAuNzUsIDIuNzUpO1xyXG5cdFx0bWVzaC5yb3RhdGlvbi5zZXQoTWF0aC5QSSAvIDM2LCAwLCAwKTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0dHJlZXMubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDEuNSwgLTAuNSwgMi43NSk7XHJcblx0XHRtZXNoLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gMzYsIDAsIC1NYXRoLlBJIC8gNSk7XHJcblxyXG5cdFx0bWVzaC51cGRhdGVNYXRyaXgoKTtcclxuXHRcdHRyZWVzLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKTtcclxuXHJcblx0XHRtZXNoLnBvc2l0aW9uLnNldCgtMS41LCAtMC41LCAyLjc1KTtcclxuXHRcdG1lc2gucm90YXRpb24uc2V0KE1hdGguUEkgLyAzNiwgMCwgTWF0aC5QSSAvIDUpO1xyXG5cclxuXHRcdG1lc2gudXBkYXRlTWF0cml4KCk7XHJcblx0XHR0cmVlcy5tZXJnZShtZXNoLmdlb21ldHJ5LCBtZXNoLm1hdHJpeCk7XHJcblxyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKHRyZWVzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0c3R1ZmYuYWRkKG1lc2gpO1xyXG5cclxuXHRcdHN0dWZmLnBvc2l0aW9uLnNldCg5LCAyLCAzKTtcclxuXHRcdHN0dWZmLnJvdGF0aW9uLnNldChNYXRoLlBJIC8gOSwgMCwgMCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoc3R1ZmYpO1xyXG5cclxuXHJcblxyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvYm94MS5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Ym94X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0Ym94X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJveF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdG1lc2gucG9zaXRpb24uc2V0KDcuOSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoMTAuNSwgMC43NSwgMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMi41LCAxLjUsIDIpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoNy45LCAyLjI1LCAxKTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChtZXNoKTtcclxuXHR9XHJcblxyXG5cdHNldFBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54IC0gMjcsIHBvc2l0aW9uLnkgLSAxMCwgcG9zaXRpb24ueiArIDIwKTtcclxuXHR9XHJcblxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoMjcpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKDEwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWigtMjApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2Uucm90YXRpb24uc2V0KHJvdGF0aW9uLngsIHJvdGF0aW9uLnksIHJvdGF0aW9uLnopO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWCgtMjcpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVZKC0xMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooMjApO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuTGFyZ2VIb3VzZUJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5MYXJnZUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQnVpbGRlcnMuQWJzdHJhY3RCdWlsZGVyID0gY2xhc3Mge1xyXG5cclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiPiBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlciA+IGNvbnN0cnVjdG9yID4gcmVhZHlcIik7XHJcblx0fVxyXG5cclxuXHQvKiBJTkRFUEVOREVOVCBDT05TVFJVQ1RJTkcgUEFSVFMgKi9cclxuXHRidWlsZEZhY2FkZSgpIHsgfVxyXG5cdGJ1aWxkQmxhbmtzKCkgeyB9XHJcblx0YnVpbGRXaW5kb3dzKCkgeyB9XHJcblx0YnVpbGREb29ycygpIHsgfVxyXG5cdGJ1aWxkU3R1ZmYoKSB7IH1cclxuXHJcblx0LyogQ09OU1RSVUNUIE9CSkVDVCAqL1xyXG5cdGJ1aWxkKHBvc2l0aW9uLCByb3RhdGlvbikge1xyXG5cclxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gfHwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XHJcblx0XHRyb3RhdGlvbiA9IHJvdGF0aW9uIHx8IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcclxuXHJcblx0XHR0aGlzLmJ1aWxkRmFjYWRlKCk7XHJcblx0XHR0aGlzLmJ1aWxkQmxhbmtzKCk7XHJcblx0XHR0aGlzLmJ1aWxkV2luZG93cygpO1xyXG5cdFx0dGhpcy5idWlsZERvb3JzKCk7XHJcblx0XHR0aGlzLmJ1aWxkU3R1ZmYoKTtcclxuXHJcblx0XHR0aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHRcdHRoaXMuc2V0Um90YXRpb24ocm90YXRpb24pO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG5cdH1cclxuXHJcblx0LyogT0JKRUNUIExPQ0FUSU9OICovXHJcblx0c2V0UG9zaXRpb24ocG9zaXRpb24pIHsgfVxyXG5cdHNldFJvdGF0aW9uKHJvdGF0aW9uKSB7IH1cclxuXHJcblxyXG5cdC8qIFRFWFRVUkUgTk9STUFMSVpBVElPTiAqL1xyXG5cdGFzc2lnblVWcyhnZW9tZXRyeSkge1xyXG5cclxuXHQgICAgZ2VvbWV0cnkuY29tcHV0ZUJvdW5kaW5nQm94KCk7XHJcblxyXG5cdCAgICBsZXQgbWF4ID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWF4O1xyXG5cdCAgICBsZXQgbWluID0gZ2VvbWV0cnkuYm91bmRpbmdCb3gubWluO1xyXG5cclxuXHQgICAgbGV0IG9mZnNldCAgPSBuZXcgVEhSRUUuVmVjdG9yMygwIC0gbWluLngsIDAgLSBtaW4ueSwgMCAtIG1pbi56KTtcclxuXHQgICAgbGV0IHJhbmdlICAgPSBuZXcgVEhSRUUuVmVjdG9yMyhtYXgueCAtIG1pbi54LCBtYXgueSAtIG1pbi55LCBtYXgueiAtIG1pbi56KTtcclxuXHJcblx0ICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0gPSBbXTtcclxuXHJcblx0ICAgIGxldCBmYWNlcyA9IGdlb21ldHJ5LmZhY2VzO1xyXG5cclxuXHQgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5mYWNlcy5sZW5ndGggOyBpKyspIHtcclxuXHJcblx0ICAgICAgbGV0IHYxID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYV07XHJcblx0ICAgICAgbGV0IHYyID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uYl07XHJcblx0ICAgICAgbGV0IHYzID0gZ2VvbWV0cnkudmVydGljZXNbZmFjZXNbaV0uY107XHJcblxyXG5cdCAgICAgIGlmKHYxLnggPT09IHYyLnggJiYgdjIueCA9PT0gdjMueCkge1xyXG5cdFx0ICAgICAgZ2VvbWV0cnkuZmFjZVZlcnRleFV2c1swXS5wdXNoKFtcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjEueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2MS55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjIueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2Mi55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKSxcclxuXHRcdCAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjIoICggdjMueiArIG9mZnNldC56ICkgLyByYW5nZS56ICwgKCB2My55ICsgb2Zmc2V0LnkgKSAvIHJhbmdlLnkgKVxyXG5cdFx0ICAgICAgXSk7XHJcblx0ICAgICAgfSBlbHNlIHtcclxuXHRcdCAgICAgIGdlb21ldHJ5LmZhY2VWZXJ0ZXhVdnNbMF0ucHVzaChbXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYxLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjEueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYyLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjIueSArIG9mZnNldC55ICkgLyByYW5nZS55ICksXHJcblx0XHQgICAgICAgIG5ldyBUSFJFRS5WZWN0b3IyKCAoIHYzLnggKyBvZmZzZXQueCApIC8gcmFuZ2UueCAsICggdjMueSArIG9mZnNldC55ICkgLyByYW5nZS55IClcclxuXHRcdCAgICAgIF0pO1xyXG5cdCAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgZ2VvbWV0cnkudXZzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9TaG9vdGVyLkVudGl0aWVzL1Nob290ZXIuRW50aXRpZXMuQnVpbGRlcnMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5BYnN0cmFjdEJ1aWxkZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XHJcblxyXG5TaG9vdGVyLm5hbWVzcGFjZShcIlNob290ZXIuRW50aXRpZXNcIik7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJsb2NrID0gY2xhc3Mge1xyXG5cclxuXHRzdGF0aWMgY3JlYXRlKGhlaWdodCwgd2lkdGgsIGRlcHRoKSB7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGhlaWdodCwgd2lkdGgsIGRlcHRoKTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbG9jaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcblNob290ZXIuRW50aXRpZXMuQmxhbmsgPSBjbGFzcyB7XHJcblxyXG5cdHN0YXRpYyBjcmVhdGUod2lkdGgsIGhlaWdodCwgZGVwdGgsIGNvbmUpIHtcclxuXHJcblx0XHRsZXQgaW5zdGFuY2UsIGdlb21ldHJ5LCBtZXNoLCBjb250YWluZXI7XHJcblxyXG5cdFx0Y29udGFpbmVyID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkod2lkdGgsIGhlaWdodCwgZGVwdGgpO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5KTtcclxuXHJcblx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0Y29udGFpbmVyLm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcclxuXHJcblx0XHRpZih0cnVlID09PSBjb25lKSB7XHJcblxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoZGVwdGgsIDIpO1xyXG5cdFx0XHRtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvbWV0cnkpO1xyXG5cclxuXHRcdFx0bWVzaC5wb3NpdGlvbi5zZXQoKHdpZHRoIC8gMikgLSBkZXB0aCwgKGhlaWdodCAvIDIpICsgMSwgMCk7XHJcblxyXG5cdFx0XHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xyXG5cdFx0XHRjb250YWluZXIubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGluc3RhbmNlID0gbmV3IFRIUkVFLk1lc2goY29udGFpbmVyKTtcclxuXHJcblx0XHRyZXR1cm4gaW5zdGFuY2U7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvb3Rlci5FbnRpdGllcy5CbGFuaztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CbGFuay5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLldpbmRvdyA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHJcblx0XHRsZXQgd2luZG93X3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL3dpbmRvdy5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0d2luZG93X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0d2luZG93X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNCwgNCk7XHJcblx0XHRsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHdpbmRvd190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdGxldCBpbnN0YW5jZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0cmV0dXJuIGluc3RhbmNlO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuV2luZG93O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVyc1wiKTtcclxuXHJcbmltcG9ydCBBYnN0cmFjdEJ1aWxkZXIgZnJvbSAnLi9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLkFic3RyYWN0QnVpbGRlci5qcyc7XHJcblxyXG5pbXBvcnQgQmxvY2sgZnJvbSAnLi4vU2hvb3Rlci5FbnRpdGllcy5CbG9jay5qcyc7XHJcbmltcG9ydCBCbGFuayBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLkJsYW5rLmpzJztcclxuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9TaG9vdGVyLkVudGl0aWVzLldpbmRvdy5qcyc7XHJcblxyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uLy4uL1Nob290ZXIuR3JhcGhpY3MvU2hvb3Rlci5HcmFwaGljcy5Mb2FkZXIuanMnO1xyXG5cclxuU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPSBjbGFzcyBleHRlbmRzIEFic3RyYWN0QnVpbGRlciB7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHJcblx0XHRjb25zb2xlLmxvZyhcIj4gU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy5NZWRpdW1Ib3VzZUJ1aWxkZXIgPiBjb25zdHJ1Y3RvciA+IHJlYWR5XCIpO1xyXG5cdH1cclxuXHJcblx0YnVpbGRGYWNhZGUoKSB7XHJcblxyXG5cdFx0bGV0IG1lc2gsIG1hdGVyaWFsLCBibG9jaywgYnVpbGRpbmdCbG9ja3M7XHJcblx0XHRcclxuXHRcdGJ1aWxkaW5nQmxvY2tzID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XHJcblxyXG5cdFx0YmxvY2sgPSBCbG9jay5jcmVhdGUoMzAsIDIwLCAzMCk7XHJcblx0XHRibG9jay5wb3NpdGlvbi5zZXQoMTUsIDEwLCAtMTUpO1xyXG5cdFx0YmxvY2sudXBkYXRlTWF0cml4KCk7XHJcblx0XHRidWlsZGluZ0Jsb2Nrcy5tZXJnZShibG9jay5nZW9tZXRyeSwgYmxvY2subWF0cml4KTtcclxuXHJcblx0XHRsZXQgYmxvY2tfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvdG93ZXIuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcdGJsb2NrX3RleHR1cmUud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxvY2tfdGV4dHVyZS53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xyXG5cdFx0XHRibG9ja190ZXh0dXJlLnJlcGVhdC5zZXQoNSwgNSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmFzc2lnblVWcyhidWlsZGluZ0Jsb2Nrcyk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJsb2NrX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGJ1aWxkaW5nQmxvY2tzLCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFdpbmRvd3MoKSB7XHJcblxyXG5cdFx0bGV0IGdhbWVXaW5kb3c7XHJcblxyXG5cdFx0LyogRk9SV0FSRCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDE1LCAxNSwgMC4wMSk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMjUsIDUsIDAuMDEpO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcblx0XHQvKiBSSUdIVCBXSU5ET1dTICovXHJcblxyXG5cdFx0Z2FtZVdpbmRvdyA9IFdpbmRvdy5jcmVhdGUoKTtcclxuXHRcdGdhbWVXaW5kb3cucG9zaXRpb24uc2V0KDMwLjAxLCAxNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKGdhbWVXaW5kb3cpO1xyXG5cclxuXHRcdC8qIC0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIEJBQ0tXQVJEIFdJTkRPV1MgKi9cclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoMTUsIDE1LCAtMzAuMDEpO1xyXG5cdFx0Z2FtZVdpbmRvdy5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHRnYW1lV2luZG93ID0gV2luZG93LmNyZWF0ZSgpO1xyXG5cdFx0Z2FtZVdpbmRvdy5wb3NpdGlvbi5zZXQoNSwgNSwgLTMwLjAxKTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIE1hdGguUEksIDApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQoZ2FtZVdpbmRvdyk7XHJcblxyXG5cdFx0LyogLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qIExFRlQgV0lORE9XUyAqL1xyXG5cclxuXHRcdGdhbWVXaW5kb3cgPSBXaW5kb3cuY3JlYXRlKCk7XHJcblx0XHRnYW1lV2luZG93LnBvc2l0aW9uLnNldCgtMC4wMSwgNSwgLTE1KTtcclxuXHRcdGdhbWVXaW5kb3cucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLmFkZChnYW1lV2luZG93KTtcclxuXHJcblx0XHQvKiAtLS0tLS0tLS0tLS0gKi9cdFx0XHJcblx0fVxyXG5cclxuXHRidWlsZEJsYW5rcygpIHtcclxuXHJcblx0XHRsZXQgbWVzaCwgbWF0ZXJpYWwsIGJsYW5rLCBidWlsZGluZ0JsYW5rcztcclxuXHJcblx0XHRidWlsZGluZ0JsYW5rcyA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xyXG5cclxuXHRcdGZvcihsZXQgaiA9IDA7IGogPCAyOyArK2opIHtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCA0OyArK2kpIHtcclxuXHJcblx0XHRcdFx0YmxhbmsgPSBCbGFuay5jcmVhdGUoKGkgJSAzID8gMC41IDogMSksIDIwLCAoaSAlIDMgPyAwLjI1IDogMC41KSwgdHJ1ZSk7XHJcblx0XHRcdFx0YmxhbmsucG9zaXRpb24uc2V0KChpICUgMyA/IDAuMjUgOiAwLjUpICogKGkgPT09IDMgPyAtMSA6IDEpICsgMTAgKiBpLCAxMCwgLTMwICogaik7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCArIDEwICogaSwgLTE1KTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoLU1hdGguUEkgLyAyLCAwLCAwKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBqID0gMDsgaiA8IDI7ICsraikge1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xyXG5cclxuXHRcdFx0XHRibGFuayA9IEJsYW5rLmNyZWF0ZSgwLjUsIDIwLCAwLjI1LCAoaSAlIDMgIT09IDApKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMzAgKiBqLCAxMCwgLTEwICogaSk7XHJcblx0XHRcdFx0Ymxhbmsucm90YXRpb24uc2V0KDAsIC1NYXRoLlBJIC8gMiwgMCk7XHJcblx0XHRcdFx0YmxhbmsudXBkYXRlTWF0cml4KCk7XHJcblx0XHRcdFx0YnVpbGRpbmdCbGFua3MubWVyZ2UoYmxhbmsuZ2VvbWV0cnksIGJsYW5rLm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgMjsgKytpKSB7XHJcblxyXG5cdFx0XHRcdGJsYW5rID0gQmxhbmsuY3JlYXRlKDAuNSwgMzAsIDAuMjUsIGZhbHNlKTtcclxuXHRcdFx0XHRibGFuay5wb3NpdGlvbi5zZXQoMTUsIDEwICsgMTAgKiBpLCAtMzAgKiBqKTtcclxuXHRcdFx0XHRibGFuay5yb3RhdGlvbi5zZXQoMCwgMCwgLU1hdGguUEkgLyAyKTtcclxuXHRcdFx0XHRibGFuay51cGRhdGVNYXRyaXgoKTtcclxuXHRcdFx0XHRidWlsZGluZ0JsYW5rcy5tZXJnZShibGFuay5nZW9tZXRyeSwgYmxhbmsubWF0cml4KTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGJsYW5rX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2JsYW5rLmpwZycsIChpbWFnZSkgPT4ge1xyXG5cdFx0XHRibGFua190ZXh0dXJlLmltYWdlID0gaW1hZ2U7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0XHRibGFua190ZXh0dXJlLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XHJcblx0XHRcdGJsYW5rX3RleHR1cmUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0YmxhbmtfdGV4dHVyZS5yZXBlYXQuc2V0KDUsIDUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5hc3NpZ25VVnMoYnVpbGRpbmdCbGFua3MpO1xyXG5cclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBibGFua190ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChidWlsZGluZ0JsYW5rcywgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHRoaXMuaW5zdGFuY2UuYWRkKG1lc2gpO1xyXG5cdH1cclxuXHJcblx0YnVpbGREb29ycygpIHtcclxuXHJcblx0XHRsZXQgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGxldCBkb29yX3RleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZSgpO1xyXG5cclxuXHRcdExvYWRlci5pbnN0YW5jZS5nZXRJbWFnZSgnaW1nL2Rvb3IuanBnJywgKGltYWdlKSA9PiB7XHJcblx0XHRcdGRvb3JfdGV4dHVyZS5pbWFnZSA9IGltYWdlO1xyXG5cdFx0XHRkb29yX3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSg0LCA4KTtcclxuXHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBkb29yX3RleHR1cmUsIG92ZXJkcmF3OiB0cnVlIH0pO1xyXG5cdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XHJcblxyXG5cdFx0bWVzaC5wb3NpdGlvbi5zZXQoOCwgMywgMC4wMSk7XHJcblxyXG5cdFx0dGhpcy5pbnN0YW5jZS5hZGQobWVzaCk7XHJcblx0fVxyXG5cclxuXHRidWlsZFN0dWZmKCkge1xyXG5cclxuXHRcdGxldCBzdHVmZiwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoLCB0cmVlcztcclxuXHJcblx0fVxyXG5cclxuXHRzZXRQb3NpdGlvbihwb3NpdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCAtIDE1LCBwb3NpdGlvbi55IC0gMTAsIHBvc2l0aW9uLnogKyAxNSk7XHJcblx0fVxyXG5cclxuXHRzZXRSb3RhdGlvbihyb3RhdGlvbikge1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVYKDE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgxMCk7XHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVooLTE1KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnJvdGF0aW9uLnNldChyb3RhdGlvbi54LCByb3RhdGlvbi55LCByb3RhdGlvbi56KTtcclxuXHJcblx0XHR0aGlzLmluc3RhbmNlLnRyYW5zbGF0ZVgoLTE1KTtcclxuXHRcdHRoaXMuaW5zdGFuY2UudHJhbnNsYXRlWSgtMTApO1xyXG5cdFx0dGhpcy5pbnN0YW5jZS50cmFuc2xhdGVaKDE1KTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL1Nob290ZXIuRW50aXRpZXMvU2hvb3Rlci5FbnRpdGllcy5CdWlsZGVycy9TaG9vdGVyLkVudGl0aWVzLkJ1aWxkZXJzLk1lZGl1bUhvdXNlQnVpbGRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblNob290ZXIubmFtZXNwYWNlKFwiU2hvb3Rlci5FbnRpdGllc1wiKTtcclxuXHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vU2hvb3Rlci5HcmFwaGljcy9TaG9vdGVyLkdyYXBoaWNzLkxvYWRlci5qcyc7XHJcblxyXG5TaG9vdGVyLkVudGl0aWVzLkJveCA9IGNsYXNzIHtcclxuXHJcblx0c3RhdGljIGNyZWF0ZSgpIHtcclxuXHRcdFxyXG5cdFx0bGV0IGxvYWRlciwgZ2VvbWV0cnksIG1hdGVyaWFsLCBtZXNoO1xyXG5cclxuXHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDMsIDMsIDMpO1xyXG5cclxuXHRcdGxldCBib3hfdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKCk7XHJcblxyXG5cdFx0TG9hZGVyLmluc3RhbmNlLmdldEltYWdlKCdpbWcvYm94Mi5qcGcnLCAoaW1hZ2UpID0+IHtcclxuXHRcdFx0Ym94X3RleHR1cmUuaW1hZ2UgPSBpbWFnZTtcclxuXHRcdFx0Ym94X3RleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGJveF90ZXh0dXJlLCBvdmVyZHJhdzogdHJ1ZSB9KTtcclxuXHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xyXG5cclxuXHRcdHJldHVybiBtZXNoO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob290ZXIuRW50aXRpZXMuQm94O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vU2hvb3Rlci5FbnRpdGllcy9TaG9vdGVyLkVudGl0aWVzLkJveC5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=