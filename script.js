document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".hero").classList.add("fade-in");
});

const projects = {
  lili: {
    title: "Novela Visual",
    description: `
    <p>Este es un prototipo de novela visual estilo anime desarrollado en Unity. Incluye:</p>
    <ul>
      <li>✍️ Texto progresivo tipo “máquina de escribir”.</li>
      <li>💬 Sistema para agregar diálogos e imágenes sincronizadas.</li>
      <li>🎛️ Ajuste dinámico de la velocidad del texto mediante slider.</li>
      <li>🌆 Transiciones suaves entre escenas (cafetería, biblioteca, dormitorios...).</li>
      <li>🔓 Sistema de progreso y desbloqueo de eventos.</li>
      <li>🧑‍🎨 Personalización del nombre del jugador.</li>
    </ul>
  `,
    tech: [
      "Unity",
      "C#",
      "UI Dinámica",
      "Narrativa Visual",
      "Gestión de eventos",
    ],
    repo: "https://github.com/DDLaraCalzada/VisualNovel2D_unity",
    video: "https://www.youtube.com/embed/djVPKK1yPJk?si=aLdrszowtezkohye",
  },
  match3: {
    title: "Match 3 | Time Attack",
    description: `
      <p>He desarrollado este juego tipo puzzle Match 3 en Unity, diseñado en formato vertical para dispositivos móviles.</p>
      <ul>
        <li>🎮 <strong>Mecánica:</strong> combina fichas y consigue la mayor cantidad de puntos posibles antes de que se acabe el tiempo.</li>
        <li>🏆 <strong>Ranking:</strong> sistema de puntajes que guarda los resultados y los muestra en una tabla ordenada del mejor al menor.</li>
      </ul>
    `,
    tech: [
      "Unity",
      "C#",
      "Diseño UI móvil",
      "Sistema de ranking",
      "Optimización vertical",
    ],
    repo: "https://github.com/DDLaraCalzada/Match3-TimeAttack-Unity",
    video: "https://www.youtube.com/embed/wzlj13eIScY?si=yUPsaueUch4-TPxs",
  },
  apartamentoVR: {
    title: "Aplicativo VR | Simulación de Apartamento",
    description: `
      <p>Junto a <strong>Santiago Londoño</strong>, <strong>Marco Chaparro</strong>, <strong>Darwin Criollo</strong> y <strong>Dayan Lara</strong>, hemos desarrollado un aplicativo en VR utilizando Unity, diseñado para las gafas Oculus.</p>
      <p>Esta aplicación ofrece una experiencia inmersiva que permite explorar y personalizar un apartamento de manera interactiva.</p>
      <ul>
        <li>🚶‍♂️ <strong>Navegación libre:</strong> recorre el apartamento de forma natural.</li>
        <li>🎨 <strong>Personalización de texturas:</strong> cambia el aspecto de paredes, pisos, techos y muebles.</li>
        <li>💡 <strong>Control de iluminación:</strong> ajusta la intensidad y el color de las luces para crear diferentes ambientes.</li>
        <li>🛋️ <strong>Interacción con objetos:</strong> mueve y reorganiza la mayoría de los elementos de la escena.</li>
        <li>📺 <strong>Interactividad avanzada:</strong> incluso puedes encender la televisión y disfrutar de una experiencia más realista.</li>
      </ul>
      <p>Nuestra meta fue lograr un entorno lo más realista e inmersivo posible, ofreciendo una experiencia que simula de manera precisa la sensación de estar dentro del apartamento.</p>
    `,
    tech: [
      "Unity",
      "VR Oculus",
      "Interacción avanzada",
      "Personalización dinámica",
      "Diseño inmersivo",
    ],
    repo: "https://github.com/DDLaraCalzada",
    video: "https://www.youtube.com/embed/_VrneVOld-s?si=zyWZ3tc_RqAADZCd",
  },
  clasificacionFrutas: {
    title: "Clasificación de Naranjas vs Mandarinas con YOLOv8",
    description: `
      <p>Este proyecto implementa un modelo de visión por computadora usando <strong>YOLOv8</strong> para diferenciar entre naranjas y mandarinas en tiempo real.</p>
      <ul>
        <li>🧠 <strong>Entrenamiento:</strong> realizado en Google Colab con un dataset personalizado creado en Roboflow.</li>
        <li>🖥️ <strong>Implementación local:</strong> desarrollada en Python + OpenCV para detección en tiempo real.</li>
        <li>📦 <strong>Optimización:</strong> modelo ligero y eficiente para ejecución en equipos personales sin GPU dedicada.</li>
        <li>📊 <strong>Resultados:</strong> detección precisa con bounding boxes y etiquetas en cámara en vivo.</li>
      </ul>
    `,
    tech: ["YOLOv8", "Python", "OpenCV", "Google Colab", "Roboflow"],
    repo: "https://github.com/DDLaraCalzada/yolov8-orange-vs-mandarin",
    video: "https://www.youtube.com/embed/8nil3UyBd-4?si=K2ltY7Y3uCdJ69xI",
  },
  visionComparativa: {
    title: "Vision Google & Azure – Comparativa con Flask + Vagrant",
    description: `
      <p>Este proyecto permite probar y comparar las APIs de <strong>Google Cloud Vision</strong> y <strong>Azure Computer Vision</strong> para detección de objetos.</p>
      <ul>
        <li>🔍 <strong>Objetivo:</strong> evaluar precisión, velocidad y facilidad de integración de ambas APIs.</li>
        <li>🧪 <strong>Entorno reproducible:</strong> todo el sistema corre en una máquina virtual configurada con Vagrant.</li>
        <li>🌐 <strong>Interfaz web:</strong> desarrollada con Flask para subir imágenes, visualizar resultados y comparar salidas.</li>
        <li>📊 <strong>Resultados:</strong> se muestran en tablas comparativas con métricas clave y ejemplos visuales.</li>
      </ul>
      <p>Ideal para quienes desean entender las diferencias prácticas entre servicios de visión por computadora en la nube.</p>
    `,
    tech: [
      "Google Cloud Vision",
      "Azure Computer Vision",
      "Flask",
      "Vagrant",
      "Python",
    ],
    repo: "https://github.com/DDLaraCalzada/google-azure-vision-comparison",
    video: "https://www.youtube.com/embed/Bxgo0WkLXKs?si=ou6XVMJB1BOJ4gsK",
  },
  asistenteAR: {
    title: "App Móvil | Realidad Aumentada + Asistente Virtual",
    description: `
      <p>Este aplicativo móvil desarrollado en <strong>Unity</strong> combina realidad aumentada y un asistente virtual interactivo para mejorar la experiencia en centros comerciales.</p>
      <ul>
        <li>🧭 <strong>Navegación con realidad aumentada:</strong> guía visual dentro del entorno físico.</li>
        <li>🤖 <strong>Interacción con asistente virtual:</strong> mediante botones y respuestas contextuales.</li>
        <li>🖼️ <strong>Reconocimiento visual:</strong> muestra información basada en imágenes del mundo real.</li>
        <li>🎟️ <strong>Cupones de descuento:</strong> sistema de almacenamiento y visualización de promociones.</li>
      </ul>
      <p>El objetivo es ofrecer una forma innovadora y práctica de guiar a los usuarios dentro de un centro comercial, integrando lo digital con el entorno físico.</p>
    `,
    tech: [
      "Unity",
      "AR Foundation",
      "Reconocimiento de imágenes",
      "Interfaz móvil",
      "UX interactiva",
    ],
    repo: "https://github.com/DDLaraCalzada",
    video: "https://www.youtube.com/embed/ov4KApJCQ3g?si=tgV16tES38yOTTDU",
  },
};

function openModal(key) {
  const p = projects[key];
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-description").innerHTML = p.description;
  document.getElementById("modal-tech").innerHTML = p.tech
    .map((t) => `<li>${t}</li>`)
    .join("");
  document.getElementById("modal-repo").href = p.repo;
  document.getElementById("modal-video").src = p.video;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("modal-video").src = "";
}
