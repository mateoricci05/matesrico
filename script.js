/* =====================================================
   mates.rico — script.js  v2
   - Stock real integrado
   - Modal detalle producto
   - Carrito lateral
   - Modal envío con detección de zona gratuita
   - Mensaje WhatsApp automático
   ===================================================== */

// ═══════════════════════════════════════════════════════
// 📦 PRODUCTOS
// Para editar: modificá este array.
// ═══════════════════════════════════════════════════════
const productos = [
  {
    id: 1,
    nombre: "Imperial Guarda Alpaca — Cuero Borravino",
    descripcion: "Imperial de calabaza con guarda de alpaca cincelada a mano, cuero liso borravino y base de alpaca ancha. Una pieza única con identidad propia. Para el matera que no negocia calidad.",
    precio: 60000,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    categoria: "Mates",
    features: [
      "Guarda de alpaca cincelada",
      "Cuero liso borravino",
      "Base de alpaca ancha",
      "Calabaza curada artesanalmente",
      "Bombilla pico de loro incluida",
    ],
  },
  {
    id: 2,
    nombre: "Torpedo Virola Alpaca — Cuero Negro",
    descripcion: "Mate torpedo con virola cincelada de alpaca, cuero liso negro y base de alpaca con pelotitas de bronce. El clásico argentino con carácter propio. Solo queda 1 unidad.",
    precio: 55000,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    categoria: "Mates",
    features: [
      "Virola de alpaca cincelada",
      "Cuero liso negro",
      "Base alpaca con pelotitas de bronce",
      "Forma torpedo tradicional",
      "Pieza única",
    ],
  },
  {
    id: 3,
    nombre: "Imperial Algarrobo + Bombilla",
    descripcion: "Imperial de madera de algarrobo con guarda de acero inoxidable. Bombilla pico de loro de acero incluida. La madera de algarrobo tiene veta natural única en cada pieza — ningún mate es igual a otro.",
    precio: 30000,
    stock: 5,
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    categoria: "Mates",
    features: [
      "Madera de algarrobo auténtica",
      "Guarda de acero inoxidable",
      "Bombilla pico de loro incluida",
      "Base plana antivuelco",
      "Veta única en cada pieza",
    ],
  },
  {
    id: 4,
    nombre: "Imperial Alpaca + Termo 1L + Bombilla",
    descripcion: "El set completo del matera: Imperial de alpaca + termo de 1 litro en acero inoxidable + bombilla pico de loro. Todo lo que necesitás para matear en cualquier lado, en un solo paquete.",
    precio: 65000,
    stock: 3,
    imagen: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    categoria: "Mates",
    features: [
      "Imperial guarda alpaca",
      "Termo 1L acero inoxidable",
      "Bombilla pico de loro acero",
      "Set listo para usar",
      "Ideal para regalo",
    ],
  },
  {
    id: 5,
    nombre: "Yerba Baldo 1kg",
    descripcion: "Yerba Baldo 1kg — sabor equilibrado, aroma intenso y cebadas largas. La preferida por los materos exigentes. Disponible también dentro de nuestros kits completos.",
    precio: 11500,
    stock: 10,
    imagen: "https://images.unsplash.com/photo-1544025162-d76538bf53f3?w=600&q=80",
    categoria: "Yerbas",
    features: [
      "Yerba Baldo seleccionada",
      "Peso neto 1kg",
      "Sabor equilibrado y aroma intenso",
      "Cebadas largas",
      "Bolsa resellable",
    ],
  },
  {
    id: 6,
    nombre: "Combo Boca Juniors — Camionero Grabado",
    descripcion: "Camionero de algarrobo con el escudo de Boca Juniors grabado a fuego + bombilla chata + caja de presentación lista para regalar. El regalo perfecto para el xeneize de tu vida.",
    precio: 35000,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    categoria: "Combos",
    features: [
      "Grabado Boca Juniors a fuego",
      "Camionero de algarrobo",
      "Bombilla chata incluida",
      "Caja de presentación",
      "Listo para regalar",
    ],
  },
  {
    id: 7,
    nombre: "Combo River Plate — Camionero Grabado",
    descripcion: "Camionero de algarrobo con el escudo de River Plate grabado a fuego + bombilla chata + caja de presentación. El regalo ideal para el millonario de la familia.",
    precio: 35000,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    categoria: "Combos",
    features: [
      "Grabado River Plate a fuego",
      "Camionero de algarrobo",
      "Bombilla chata incluida",
      "Caja de presentación",
      "Listo para regalar",
    ],
  },
  {
    id: 8,
    nombre: "Imperial Alpaca Grabado Boca Juniors",
    descripcion: "Imperial de calabaza con cuero alpaca y grabado exclusivo Boca Juniors. La pieza más premium para el fanático xeneize. Elegancia y pasión en un solo mate. Solo 1 unidad disponible.",
    precio: 57500,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    categoria: "Combos",
    features: [
      "Imperial calabaza con alpaca",
      "Grabado Boca Juniors exclusivo",
      "Edición especial",
      "Bombilla incluida",
      "Solo 1 unidad disponible",
    ],
  },
  {
    id: 9,
    nombre: "Imperial Alpaca Grabado River Plate",
    descripcion: "Imperial de calabaza con cuero alpaca y grabado exclusivo River Plate. Elegancia y pasión en un solo mate. Pieza de colección, solo 1 unidad disponible.",
    precio: 57500,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    categoria: "Combos",
    features: [
      "Imperial calabaza con alpaca",
      "Grabado River Plate exclusivo",
      "Edición especial",
      "Bombilla incluida",
      "Solo 1 unidad disponible",
    ],
  },
  {
    id: 10,
    nombre: "Kit Matera Clásico — Imperial + Yerba",
    descripcion: "Todo para arrancar a matear: Imperial Virola Alpaca cuero negro + bombilla pico de loro + 1kg de Yerba Baldo incluida. Un solo pack, todo adentro.",
    precio: 70000,
    stock: 1,
    imagen: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    categoria: "Combos",
    features: [
      "Imperial Virola Alpaca Cuero Negro",
      "Bombilla pico de loro acero",
      "Yerba Baldo 1kg incluida",
      "Packaging MATES.RICO",
      "Todo listo para usar",
    ],
  },
  {
    id: 11,
    nombre: "Kit Matera Premium — Imperial + Termo + Yerba",
    descripcion: "El combo más completo: Imperial Alpaca + Termo 1L acero + bombilla pico de loro + 1kg de Yerba Baldo. Todo incluido, empaquetado con identidad MATES.RICO. El regalo que lo tiene todo.",
    precio: 95000,
    stock: 3,
    imagen: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=600&q=80",
    categoria: "Combos",
    features: [
      "Imperial guarda alpaca",
      "Termo 1L acero inoxidable",
      "Bombilla pico de loro acero",
      "Yerba Baldo 1kg incluida",
      "Packaging premium MATES.RICO",
    ],
  },
  {
    id: 12,
    nombre: "Combo Imperial + Canasta Eco",
    descripcion: "Imperial Guarda Alpaca presentado en canasta ecológica con chaulata y bombilla chata. El combo más fotogénico de la tienda. Perfecto para regalar con estilo rústico y premium a la vez.",
    precio: 58000,
    stock: 2,
    imagen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    categoria: "Combos",
    features: [
      "Imperial guarda alpaca",
      "Canasta ECO artesanal",
      "Chaulata incluida",
      "Bombilla chata",
      "Presentación rústica premium",
    ],
  },
];

// ═══════════════════════════════════════════════════════
// ⚙️ CONFIG
// ═══════════════════════════════════════════════════════
const WHATSAPP_NUMBER = "5493543650854";

// Zonas con envío gratis (en minúsculas para comparación)
const ZONAS_GRATIS = ["río ceballos", "rio ceballos", "salsipuedes", "unquillo", "villa allende"];

// Monto mínimo para envío gratis en otras zonas
const ENVIO_GRATIS_MINIMO = 100000;

// ═══════════════════════════════════════════════════════
// 🗃️ ESTADO
// ═══════════════════════════════════════════════════════
let carrito        = [];
let categoriaActual = "Todos";
let localidadElegida = "";

// ═══════════════════════════════════════════════════════
// 🚀 INIT
// ═══════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════
// ✨ SPLASH SCREEN
// ═══════════════════════════════════════════════════════
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;

  // Ocultar splash después de que la barra de carga termina (1.8s total)
  const timer = setTimeout(() => {
    splash.classList.add("oculto");
    // Quitar del DOM tras la transición para no bloquear interacción
    setTimeout(() => splash.remove(), 700);
  }, 1800);

  // Si el usuario toca/clickea, ocultar antes
  splash.addEventListener("click", () => {
    clearTimeout(timer);
    splash.classList.add("oculto");
    setTimeout(() => splash.remove(), 700);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSplash();
  renderizarProductos();
  initNavbar();
  initFiltros();
  initModalProducto();
  initModalCarrito();
  initModalEnvio();
  initReveal();
  feather.replace();
});

// ═══════════════════════════════════════════════════════
// 🧱 RENDER PRODUCTOS
// ═══════════════════════════════════════════════════════
function renderizarProductos(categoria = "Todos") {
  const grid = document.getElementById("productos-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const filtrados = categoria === "Todos"
    ? productos
    : productos.filter(p => p.categoria === categoria);

  if (filtrados.length === 0) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--gris-med);">No hay productos en esta categoría.</div>`;
    return;
  }

  filtrados.forEach((p, i) => {
    const agotado = p.stock === 0;
    const stockBajo = p.stock <= 2 && p.stock > 0;
    const labelStock = agotado
      ? "Sin stock"
      : stockBajo
        ? `${p.stock === 1 ? "¡Última unidad!" : `Solo ${p.stock} disponibles`}`
        : `${p.stock} disponibles`;
    const stockClass = agotado ? "agotado" : "";

    const card = document.createElement("div");
    card.className = "producto-card reveal";
    card.style.transitionDelay = `${i * 50}ms`;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver ${p.nombre}`);
    card.tabIndex = 0;

    card.innerHTML = `
      <div class="producto-img-wrap">
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
          onerror="this.src='https://via.placeholder.com/400x400/eaf3e8/3a6b35?text=mates.rico'"/>
        <span class="producto-badge">${p.categoria}</span>
        <span class="badge-stock ${stockClass}">${labelStock}</span>
      </div>
      <div class="producto-info">
        <div class="producto-cat">${p.categoria}</div>
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-desc">${p.descripcion.substring(0, 85)}…</p>
        <div class="producto-footer">
          <span class="producto-precio">${fmt(p.precio)}</span>
          <button class="btn-comprar" ${agotado ? "disabled" : ""}>
            ${agotado ? "Agotado" : "Agregar"}
          </button>
        </div>
      </div>`;

    // Click en la card → abre modal de detalle
    card.addEventListener("click", (e) => {
      if (!e.target.classList.contains("btn-comprar")) {
        abrirModalProducto(p.id);
      }
    });
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") abrirModalProducto(p.id); });

    // Click en "Agregar" → agrega al carrito (sin abrir modal)
    const btnComp = card.querySelector(".btn-comprar");
    btnComp?.addEventListener("click", (e) => {
      e.stopPropagation();
      agregarAlCarrito(p.id);
    });

    grid.appendChild(card);
  });

  initReveal();
  feather.replace();
}

// ═══════════════════════════════════════════════════════
// 🖼️ MODAL DETALLE PRODUCTO
// ═══════════════════════════════════════════════════════
function abrirModalProducto(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;

  const overlay = document.getElementById("modal-producto-overlay");
  const inner   = document.getElementById("modal-producto-inner");
  if (!overlay || !inner) return;

  const agotado   = p.stock === 0;
  const stockBajo = p.stock <= 2 && p.stock > 0;
  const stockLabel = agotado
    ? "Sin stock"
    : stockBajo
      ? `<strong class="bajo">${p.stock === 1 ? "¡Última unidad!" : `Solo ${p.stock} disponibles`}</strong>`
      : `<strong>${p.stock} disponibles</strong>`;
  const stockClass = (agotado || stockBajo) ? "bajo" : "";

  inner.innerHTML = `
    <div class="mp-img">
      <img src="${p.imagen}" alt="${p.nombre}"
        onerror="this.src='https://via.placeholder.com/500x500/eaf3e8/3a6b35?text=mates.rico'"/>
    </div>
    <div class="mp-info">
      <p class="mp-cat">${p.categoria}</p>
      <h2 class="mp-nombre">${p.nombre}</h2>
      <p class="mp-precio">${fmt(p.precio)}</p>
      <p class="mp-desc">${p.descripcion}</p>
      <div class="mp-features">
        ${p.features.map(f => `
          <div class="mp-feature">
            <div class="mp-feature-dot"></div>
            <span>${f}</span>
          </div>`).join("")}
      </div>
      <p class="mp-stock ${stockClass}">Stock: ${stockLabel}</p>
      <button class="btn btn-primary" id="mp-btn-agregar" ${agotado ? "disabled" : ""} style="width:100%;justify-content:center;">
        ${agotado ? "Sin stock" : "Agregar al carrito"}
      </button>
    </div>`;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  feather.replace();

  document.getElementById("mp-btn-agregar")?.addEventListener("click", () => {
    agregarAlCarrito(id);
    cerrarModalProducto();
  });
}

function cerrarModalProducto() {
  document.getElementById("modal-producto-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalProducto() {
  const overlay  = document.getElementById("modal-producto-overlay");
  const closeBtn = document.getElementById("modal-producto-close");
  closeBtn?.addEventListener("click", cerrarModalProducto);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarModalProducto(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarModalProducto(); });
}

// ═══════════════════════════════════════════════════════
// 🛒 CARRITO
// ═══════════════════════════════════════════════════════
function agregarAlCarrito(id) {
  const p = productos.find(x => x.id === id);
  if (!p || p.stock === 0) return;

  const existente = carrito.find(i => i.id === id);
  if (existente) {
    // No superar el stock
    if (existente.cantidad >= p.stock) {
      mostrarToast(`Solo hay ${p.stock} unidad${p.stock > 1 ? "es" : ""} disponible`);
      return;
    }
    existente.cantidad += 1;
  } else {
    carrito.push({ id: p.id, nombre: p.nombre, precio: p.precio, imagen: p.imagen, cantidad: 1 });
  }

  actualizarBadge();
  actualizarBarraEnvio();
  mostrarToast(`✓ ${p.nombre.split(" ").slice(0,3).join(" ")} agregado`);
  renderizarCarrito();
}

function cambiarCantidad(id, delta) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;
  const p = productos.find(x => x.id === id);
  const nuevoVal = item.cantidad + delta;
  if (nuevoVal <= 0) { eliminarDelCarrito(id); return; }
  if (p && nuevoVal > p.stock) { mostrarToast(`Máximo ${p.stock} unidades disponibles`); return; }
  item.cantidad = nuevoVal;
  renderizarCarrito();
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarBadge();
  renderizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarBadge();
  renderizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
}

function actualizarBadge() {
  const badge = document.getElementById("carrito-badge");
  if (!badge) return;
  const total = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  badge.textContent = total;
  badge.classList.remove("bump");
  void badge.offsetWidth;
  badge.classList.add("bump");
}


// ═══════════════════════════════════════════════════════
// 🚚 BARRA DE PROGRESO — ENVÍO GRATIS
// ═══════════════════════════════════════════════════════
function actualizarBarraEnvio() {
  const wrap  = document.getElementById("envio-progress-wrap");
  const fill  = document.getElementById("envio-progress-fill");
  const texto = document.getElementById("envio-progress-texto");
  const falta = document.getElementById("envio-falta");
  if (!wrap || !fill) return;

  const total = calcularTotal();
  const porcentaje = Math.min((total / ENVIO_GRATIS_MINIMO) * 100, 100);
  const restante = Math.max(ENVIO_GRATIS_MINIMO - total, 0);

  fill.style.width = porcentaje + "%";

  // Si ya eligió una localidad de zona gratis, mostrar mensaje especial
  if (localidadElegida && ZONAS_GRATIS.includes(localidadElegida.toLowerCase())) {
    wrap.className = "envio-progress-wrap zona-gratis";
    if (texto) texto.innerHTML = "📍 Tu zona tiene <strong>envío gratis</strong> 🎉";
    const barWrap = wrap.querySelector(".envio-progress-bar");
    if (barWrap) barWrap.style.display = "none";
    return;
  }

  // Restablecer barra si cambió
  const barWrap = wrap.querySelector(".envio-progress-bar");
  if (barWrap) barWrap.style.display = "";

  if (total >= ENVIO_GRATIS_MINIMO) {
    wrap.className = "envio-progress-wrap alcanzado";
    if (texto) texto.innerHTML = "🎉 ¡Superaste los $100.000! <strong>Envío gratis</strong>";
    if (falta) falta.textContent = "";
  } else {
    wrap.className = "envio-progress-wrap";
    if (texto) texto.innerHTML = `Te faltan <strong id="envio-falta">${fmt(restante)}</strong> para envío gratis`;
  }
}

function renderizarCarrito() {
  const body   = document.getElementById("modal-body");
  const footer = document.getElementById("modal-footer");
  const totalEl = document.getElementById("carrito-total-precio");
  if (!body) return;

  if (carrito.length === 0) {
    body.innerHTML = `
      <div class="carrito-vacio">
        <i data-feather="shopping-bag"></i>
        <p>Tu carrito está vacío.<br/>¡Agregá algo!</p>
      </div>`;
    if (footer) footer.style.display = "none";
    actualizarBarraEnvio();
    feather.replace();
    return;
  }

  if (footer) footer.style.display = "flex";

  body.innerHTML = carrito.map(item => `
    <div class="carrito-item">
      <img class="carrito-item-img" src="${item.imagen}" alt="${item.nombre}"
        onerror="this.src='https://via.placeholder.com/54x54/eaf3e8/3a6b35?text=M'"/>
      <div class="carrito-item-info">
        <div class="carrito-item-nombre">${item.nombre}</div>
        <div class="carrito-item-precio">${fmt(item.precio)}</div>
        <div class="carrito-item-cantidad">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
          <span class="qty-valor">${item.cantidad}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
        </div>
      </div>
      <button class="carrito-item-eliminar" data-id="${item.id}" aria-label="Eliminar">
        <i data-feather="trash-2"></i>
      </button>
    </div>`).join("");

  if (totalEl) totalEl.textContent = fmt(calcularTotal());
  actualizarBarraEnvio();

  // Eventos de cantidad y eliminar
  body.querySelectorAll(".qty-btn").forEach(btn => {
    btn.addEventListener("click", () => cambiarCantidad(+btn.dataset.id, +btn.dataset.delta));
  });
  body.querySelectorAll(".carrito-item-eliminar").forEach(btn => {
    btn.addEventListener("click", () => eliminarDelCarrito(+btn.dataset.id));
  });

  feather.replace();
}

function initModalCarrito() {
  const overlay  = document.getElementById("modal-carrito-overlay");
  const fab      = document.getElementById("carrito-fab");
  const closeBtn = document.getElementById("modal-carrito-close");
  const btnFin   = document.getElementById("btn-finalizar");
  const btnVac   = document.getElementById("btn-vaciar");

  fab?.addEventListener("click", () => {
    renderizarCarrito();
    overlay?.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  closeBtn?.addEventListener("click", () => {
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
  });

  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });

  // Finalizar → cierra carrito y abre modal envío
  btnFin?.addEventListener("click", () => {
    if (carrito.length === 0) { mostrarToast("Tu carrito está vacío"); return; }
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => abrirModalEnvio(), 200);
  });

  btnVac?.addEventListener("click", () => {
    vaciarCarrito();
    mostrarToast("Carrito vaciado");
  });

  // Estado inicial
  const footer = document.getElementById("modal-footer");
  if (footer) footer.style.display = "none";
}

// ═══════════════════════════════════════════════════════
// 🚚 MODAL ENVÍO
// ═══════════════════════════════════════════════════════
function abrirModalEnvio() {
  const overlay = document.getElementById("modal-envio-overlay");
  overlay?.classList.add("open");
  document.body.style.overflow = "hidden";
  localidadElegida = "";
  // Limpiar selección previa
  document.querySelectorAll(".envio-opcion").forEach(b => b.classList.remove("selected"));
  const wrap = document.getElementById("envio-otra-wrap");
  if (wrap) wrap.style.display = "none";
  const input = document.getElementById("envio-localidad-input");
  if (input) input.value = "";
}

function cerrarModalEnvio() {
  document.getElementById("modal-envio-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function initModalEnvio() {
  const overlay   = document.getElementById("modal-envio-overlay");
  const closeBtn  = document.getElementById("modal-envio-close");
  const confirmar = document.getElementById("btn-confirmar-envio");
  const otraWrap  = document.getElementById("envio-otra-wrap");

  closeBtn?.addEventListener("click", cerrarModalEnvio);
  overlay?.addEventListener("click", (e) => { if (e.target === overlay) cerrarModalEnvio(); });

  // Botones de localidad
  document.querySelectorAll(".envio-opcion").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".envio-opcion").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      if (btn.dataset.loc === "otra") {
        localidadElegida = "";
        if (otraWrap) otraWrap.style.display = "block";
      } else {
        localidadElegida = btn.dataset.loc;
        if (otraWrap) otraWrap.style.display = "none";
        actualizarBarraEnvio();
      }
    });
  });

  // Confirmar pedido
  confirmar?.addEventListener("click", () => {
    const input = document.getElementById("envio-localidad-input");

    // Si eligió "otra localidad", tomar el input
    const btnOtra = document.querySelector('.envio-opcion[data-loc="otra"]');
    if (btnOtra?.classList.contains("selected")) {
      localidadElegida = input?.value.trim() || "";
      if (!localidadElegida) {
        input?.focus();
        mostrarToast("Ingresá tu localidad para continuar");
        return;
      }
    }

    if (!localidadElegida) {
      mostrarToast("Elegí tu localidad para continuar");
      return;
    }

    cerrarModalEnvio();
    generarWhatsapp(localidadElegida);
  });
}

// ═══════════════════════════════════════════════════════
// 💬 MENSAJE WHATSAPP
// ═══════════════════════════════════════════════════════
function generarWhatsapp(localidad) {
  if (carrito.length === 0) return;

  const esGratis = ZONAS_GRATIS.includes(localidad.toLowerCase());

  const detalle = carrito
    .map(i => `• ${i.nombre} x${i.cantidad} — ${fmt(i.precio * i.cantidad)}`)
    .join("\n");

  const total = calcularTotal();

  const envioTexto = esGratis
    ? "✅ *Envío gratis* (zona sin cargo)"
    : "📦 Envío a coordinar (cotizamos por correo o acercamiento)";

  const mensaje =
`¡Hola mates.rico!  Quiero hacer el siguiente pedido:

${detalle}

─────────────────────
 *Total productos: ${fmt(total)}*
 *Mi localidad: ${localidad}*
 {envioTexto}
─────────────────────

¿Me confirmás disponibilidad y coordinamos la entrega? ¡Gracias! `;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// ═══════════════════════════════════════════════════════
// 🧭 NAVBAR
// ═══════════════════════════════════════════════════════
function initNavbar() {
  const navbar     = document.getElementById("navbar");
  const hamburger  = document.getElementById("hamburger");
  const navLinks   = document.getElementById("nav-links");

  const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 30);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks?.classList.toggle("open");
  });

  navLinks?.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger?.classList.remove("open");
      navLinks?.classList.remove("open");
    });
  });
}

// ═══════════════════════════════════════════════════════
// 🗂️ FILTROS
// ═══════════════════════════════════════════════════════
function initFiltros() {
  document.querySelectorAll(".filtro-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      categoriaActual = btn.dataset.cat;
      renderizarProductos(categoriaActual);
    });
  });
}

// ═══════════════════════════════════════════════════════
// 👁️ REVEAL ON SCROLL
// ═══════════════════════════════════════════════════════
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("visible"));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -36px 0px" });
  els.forEach(el => obs.observe(el));
}

// ═══════════════════════════════════════════════════════
// 🍞 TOAST
// ═══════════════════════════════════════════════════════
let toastTimer = null;
function mostrarToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

// ═══════════════════════════════════════════════════════
// 💰 FORMATO PRECIO
// ═══════════════════════════════════════════════════════
function fmt(n) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency", currency: "ARS",
    minimumFractionDigits: 0, maximumFractionDigits: 0,
  }).format(n);
}
