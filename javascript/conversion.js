function convertEulerToQuaternion(euler) {
    let quaternion = new THREE.Quaternion().setFromEuler(euler);
    return quaternion;
}
function convertEulerToRotationMatrix(euler) {
    let rotationMatrix4 = new THREE.Matrix4().makeRotationFromEuler(euler);
    let rotationMatrix3 = new THREE.Matrix3().setFromMatrix4( rotationMatrix4 );
    return rotationMatrix3;
}
function convertEulerToAxisAngle(euler) {
    let quaternion = convertEulerToQuaternion(euler, euler.order);
    return convertQuaternionToAxisAngle(quaternion);
}
function convertQuaternionToRotationMatrix(quaternion) {
    let rotationMatrix4 = new THREE.Matrix4().makeRotationFromQuaternion(quaternion);
    let rotationMatrix3 = new THREE.Matrix3().setFromMatrix4( rotationMatrix4 );
    return rotationMatrix3;
}
function convertQuaternionToEuler(quaterion, order) {
    let euler = new THREE.Euler().setFromQuaternion(quaterion, order);
    return euler;
}

function convertQuaternionToAxisAngle(quaternion) {
    let angle = 2 * Math.acos(quaternion.w);
    let sqrt = Math.sqrt(1-quaternion.w*quaternion.w);
    let axis = new THREE.Vector3(quaternion.x / sqrt, quaternion.y / sqrt, quaternion.z / sqrt );
    return {
        axis: axis,
        angle: angle
    }
}

function convertRotationMatrixToEuler(rotationMatrix3, order) {
    let rotationMatrix4 = new THREE.Matrix4().set(
        rotationMatrix3.elements[0],rotationMatrix3.elements[3],rotationMatrix3.elements[6], 0,
        rotationMatrix3.elements[1],rotationMatrix3.elements[4],rotationMatrix3.elements[7], 0,
        rotationMatrix3.elements[2],rotationMatrix3.elements[5],rotationMatrix3.elements[8], 0,
        0, 0, 0, 1);
    let euler = new THREE.Euler().setFromRotationMatrix(rotationMatrix4, order);
    return euler;
}
function convertRotationMatrixToQuaternion(rotationMatrix3) {
    let rotationMatrix4 = new THREE.Matrix4().set(
        rotationMatrix3.elements[0],rotationMatrix3.elements[3],rotationMatrix3.elements[6], 0,
        rotationMatrix3.elements[1],rotationMatrix3.elements[4],rotationMatrix3.elements[7], 0,
        rotationMatrix3.elements[2],rotationMatrix3.elements[5],rotationMatrix3.elements[8], 0,
        0, 0, 0, 1);
    let quaternion = new THREE.Quaternion().setFromRotationMatrix(rotationMatrix4);
    return quaternion;
}

function convertAxisAngleToQuaternion(axisAngle) {
    let quaternion = new THREE.Quaternion().setFromAxisAngle(axisAngle.axis, axisAngle.angle);
    return quaternion;
}

function convertAxisAngleToRotationMatrix(axisAngle) {
    let quaternion = convertAxisAngleToQuaternion(axisAngle);
    let rotationMatrix = convertQuaternionToRotationMatrix(quaternion);
    return rotationMatrix;
}
function convertAxisAngleToEuler(axisAngle, order) {
    let quaternion = convertAxisAngleToQuaternion(axisAngle);
    let euler = convertQuaternionToEuler(quaternion, order);
    return euler;
}

function convertRotationMatrixToAxisAngle(rotationMatrix) {
    let quaternion = convertRotationMatrixToQuaternion(rotationMatrix);
    return convertQuaternionToAxisAngle(quaternion);
}

function convertVectorRadToDeg(x,y,z){
    return new THREE.Vector3(THREE.Math.radToDeg(x),THREE.Math.radToDeg(y),THREE.Math.radToDeg(z) );
}

function convertVectorDegToRad(x,y,z){
    return new THREE.Vector3(THREE.Math.degToRad(x),THREE.Math.degToRad(y),THREE.Math.degToRad(z) );
}