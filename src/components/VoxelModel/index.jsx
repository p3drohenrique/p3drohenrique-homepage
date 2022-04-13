import {
  useState,
  useEffect,
  useRef,
} from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { loadGLTFModel } from '../../lib/model';

function easeOutCirc(x) {
  return Math.sqrt(1 - (x - 1) ** 4);
}

const VoxelModel = () => {
  const refContainer = useRef();
  const rendererRef = useRef();
  const [loading, setLoading] = useState(true);
  const [_camera, setCamera] = useState();
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      60 * Math.cos(0.2 * Math.PI),
    ),
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    const { current: renderer } = rendererRef;

    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const newRenderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      newRenderer.setPixelRatio(window.devicePixelRatio);
      newRenderer.setSize(scW, scH);
      newRenderer.outputEncoding = THREE.sRGBEncoding;

      container.appendChild(newRenderer.domElement);
      rendererRef.current = newRenderer;

      const scale = 80;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000,
      );

      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, newRenderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        newRenderer.render(scene, camera);
      };

      loadGLTFModel(scene, '/scene.gltf', {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      return () => {
        cancelAnimationFrame(req);
        newRenderer.dispose();
      };
    }
  }, []);

  return (
    <Box
      ref={refContainer}
      className="voxel-computer"
      margin="auto"
      marginTop={['-10px', '-38px', '-40px']}
      marginBottom={['-40px', '-140px', '-200px']}
      width={[280, 480, 640]}
      height={[240, 440, 580]}
      position="relative"
    >
      {loading && (
        <Spinner
          size="xl"
          position="absolute"
          left="50%"
          top="50%"
          marginLeft="calc(0px - var(--spinner-size) / 2)"
          marginTop="calc(0px - var(--spinner-size))"
        />
      )}
    </Box>
  );
};

export default VoxelModel;
