    let euler = new THREE.Euler(90,0,0);
    let quat = convertEulerToQuaternion(euler);
    let rot = convertEulerToRotationMatrix(euler);
    let axisAngle = convertEulerToAxisAngle(euler);

    function executeTest(){
        console.log("---------------")
        console.log("euler->quat");
        console.log(convertEulerToQuaternion(euler));
        console.log("euler->rot");
        console.log(convertEulerToRotationMatrix(euler));
        console.log("euler->axisAngle");
        console.log(convertEulerToAxisAngle(euler));
    
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
        console.log("quat->axisAngle");
        console.log(convertQuaternionToAxisAngle(quat));
    
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
        console.log("rot->AxisAngle");
        console.log(convertRotationMatrixToAxisAngle(rot, "ZXY"));

        console.log("---------------")
        console.log("AxisAngle->rot");
        console.log(convertAxisAngleToRotationMatrix(axisAngle));
        console.log("AxisAngle->quat");
        console.log(convertAxisAngleToQuaternion(axisAngle));
        console.log("AxisAngle->eulerXYZ");
        console.log(convertAxisAngleToEuler(axisAngle, "XYZ"));
        console.log("AxisAngle->eulerXZY");
        console.log(convertAxisAngleToEuler(axisAngle, "XZY"));
        console.log("AxisAngle->eulerYXZ");
        console.log(convertAxisAngleToEuler(axisAngle, "YXZ"));
        console.log("AxisAngle->eulerYZX");
        console.log(convertAxisAngleToEuler(axisAngle, "YZX"));
        console.log("AxisAngle->eulerZYX");
        console.log(convertAxisAngleToEuler(axisAngle, "ZYX"));
        console.log("AxisAngle->eulerZXY");
        console.log(convertAxisAngleToEuler(axisAngle, "ZXY"));
    }

   