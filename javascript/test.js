    let euler = new THREE.Euler(90,0,0);
    let quat = convertEulerToQuaternion(euler);
    let rot = convertEulerToRotationMatrix(euler);

    function executeTest(){
        console.log("---------------")
        console.log("euler->quat");
        console.log(convertEulerToQuaternion(euler));
        console.log("euler->rot");
        console.log(convertEulerToRotationMatrix(euler));
    
        console.log("---------------")
        console.log("quat->rot");
        console.log(convertQuaternionToRotationMatrix(quat));
        console.log("quat->eulerXYZ");
        console.log(convertQuaternionToEuler(quat, "XYZ"));
        console.log("quat->eulerXZY");
        console.log(convertQuaternionToEuler(quat, "XZY"));
        console.log("quat->eulerYXZ");
        console.log(convertQuaternionToEuler(quat, "YXZ"));
        console.log("quat->eulerYZX");
        console.log(convertQuaternionToEuler(quat, "YZX"));
        console.log("quat->eulerZYX");
        console.log(convertQuaternionToEuler(quat, "ZYX"));
        console.log("quat->eulerZXY");
        console.log(convertQuaternionToEuler(quat, "ZXY"));
    
        console.log("---------------")
        console.log("rot->quat");
        console.log(convertRotationMatrixToQuaternion(rot));
        console.log("rot->eulerXYZ");
        console.log(convertRotationMatrixToEuler(rot, "XYZ"));
        console.log("rot->eulerXZY");
        console.log(convertRotationMatrixToEuler(rot, "XZY"));
        console.log("rot->eulerYXZ");
        console.log(convertRotationMatrixToEuler(rot, "YXZ"));
        console.log("rot->eulerYZX");
        console.log(convertRotationMatrixToEuler(rot, "YZX"));
        console.log("rot->eulerZYX");
        console.log(convertRotationMatrixToEuler(rot, "ZYX"));
        console.log("rot->eulerZXY");
        console.log(convertRotationMatrixToEuler(rot, "ZXY"));
    }

   