class DisplayScene {

    constructor( canvasElementId ) {

      //members
      this.canvas = $("#" + canvasElementId );
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera( 75, this.canvas.width() / this.canvas.height(), 0.1, 1000 );
      this.renderer = new THREE.WebGLRenderer({ canvas: canvasScene });
      this.delta = 0;
      this.currentRotation = new THREE.Euler();
      this.endQuaternion= new THREE.Quaternion();

      this.sceneObject = new THREE.Object3D();
      this.sceneObject.name = "mainSceneObject";
      this.scene.add( this.sceneObject );

      //adding elements to the scene
      let axesHelper = new THREE.AxesHelper( 2.5 );
      this.sceneObject.add( axesHelper );
  
      let gridHelper = new THREE.GridHelper( 5, 5 );
      this.sceneObject.add( gridHelper );

      let material = new THREE.LineBasicMaterial( { color: 0xffffff, depthTest:false } );
      let geometry = new THREE.Geometry();
      geometry.vertices.push(new THREE.Vector3(0, 0, 0));
      geometry.vertices.push(new THREE.Vector3(0, 0, 1));
      geometry.vertices.push(new THREE.Vector3(0, 0, 2));
    
      this.line = new THREE.Line( geometry, material );
      this.sceneObject.add( this.line );
  
      this.line2 = new THREE.Line( geometry, material );
      this.sceneObject.add( this.line2 )
  
      this.line3 = new THREE.Line( geometry, material );
      this.sceneObject.add( this.line3 )

      //setting camera init position
      this.camera.position.set(0, 3, 3);
      this.camera.lookAt(new THREE.Vector3(0,0,0));
    }


    animate() {
        this.delta += 0.01;
        this.delta = this.delta % 1;

        //update end line
        this.line3.rotation.set(this.currentRotation.x, this.currentRotation.y, this.currentRotation.z);

        //update animated line
        let targetQuat = new THREE.Quaternion();
        THREE.Quaternion.slerp(new THREE.Quaternion(), this.endQuaternion, targetQuat, this.delta);
        let newRotation = convertQuaternionToEuler(targetQuat, "XZY");
        this.line2.rotation.set(newRotation.x, newRotation.y, newRotation.z);

        requestAnimationFrame( this.animate.bind( this ) );
        this.renderer.render( this.scene, this.camera );
    }

    rotateMainScene(newRotation){
        this.sceneObject.rotation.set(newRotation.x, newRotation.y, newRotation.z);
    }

    updateCurrentRotation(euler) {

        this.currentRotation = euler;
        this.endQuaternion = convertEulerToQuaternion(euler);
    }
  }