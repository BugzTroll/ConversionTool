function convertEulerToQuaternion(euler) {
    let quaternion = new THREE.Quaternion().setFromEuler(euler);
    return quaternion;
}
function convertEulerToRotationMatrix(euler) {
    let rotationMatrix4 = new THREE.Matrix4().makeRotationFromEuler(euler);
    let rotationMatrix3 = new THREE.Matrix3().setFromMatrix4( rotationMatrix4 );
    return rotationMatrix3;
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

function convertVectorRadToDeg(x,y,z){
    return new THREE.Vector3(THREE.Math.radToDeg(x),THREE.Math.radToDeg(y),THREE.Math.radToDeg(z) );
}

function convertVectorDegToRad(x,y,z){
    return new THREE.Vector3(THREE.Math.degToRad(x),THREE.Math.degToRad(y),THREE.Math.degToRad(z) );
}