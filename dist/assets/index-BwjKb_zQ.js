(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const p=[{id:"spectre",name:"KAİ Spectre",type:"Elektrikli Super Kupe",category:"electric",price:212500,hp:750,accel:2.1,range:650,year:2026,image:"https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800",images:["https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"],highlights:["Ultra-Aero Karbon Gövdə","KAI Pilot V4 Avtopilot","350kW Ultra DC Şarj Dəstəyi (10 dəq - 80%)","Active Sports Səs Simulyasiyası"]},{id:"phantom",name:"KAİ Phantom",type:"Premium Lüks SUV",category:"suv",price:238e3,hp:800,accel:2.8,range:700,year:2026,image:"https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",images:["https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800"],highlights:["Aktiv Pnevmatik Asqı","Arxa Oturacaq VIP Masaj Sistemi","32 düymlük 8K KAI Cinemaview Ekranı","Maksimal Səssiz Kabin (Double Glass)"]},{id:"apex",name:"KAİ Apex",type:"Hibrid Hyperkar",category:"hybrid",price:493e3,hp:1100,accel:1.8,range:900,year:2026,image:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",images:["https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"],highlights:["F1-dən Törəmiş Hibrid Güc Qurğusu","Monokok Karbon Şassi","Aktiv Aerodinamik Spoiler","Məhdud Sayda İstehsal (Cəmi 99 ədəd)"]},{id:"horizon",name:"KAİ Horizon",type:"Elektrikli Crossover",category:"electric",price:144500,hp:450,accel:4.2,range:580,year:2026,image:"https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800",images:["https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800"],highlights:["Panoramik Ağıllı Şüşə Tavan","3D Ətraf Görünüş Sistemi","Geniş Ailə Baqajı","V2L Ev Enerji Paylama Dəstəyi"]},{id:"aero",name:"KAİ Aero",type:"İntellektual Sedan",category:"electric",price:161500,hp:530,accel:3.5,range:600,year:2026,image:"https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800",images:["https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800"],highlights:["KAI OS İntellektual Əməliyyat Sistemi","FaceID Giriş və Sürücü Tanıma","18 Dinamikli Dolby Atmos Səs Sistemi","Yüksək Sürət Şassi Stabilizatoru"]}];let d=JSON.parse(localStorage.getItem("kai_favorites"))||[],g=JSON.parse(localStorage.getItem("kai_bookings"))||[],r=[];const U=document.getElementById("header"),j=document.getElementById("navMenu"),R=document.getElementById("hamburger"),Z=document.getElementById("backdrop"),D=document.getElementById("catalogGrid"),C=document.getElementById("catalogSearch"),z=document.getElementById("categoryFilter"),q=document.getElementById("sortFilter"),Q=document.getElementById("resetFiltersBtn"),Be=document.getElementById("favoritesPanel"),Le=document.getElementById("favoritesToggleBtn"),we=document.getElementById("favoritesCloseBtn"),Ie=document.getElementById("favoritesBadge"),O=document.getElementById("favoritesPanelContent"),K=document.getElementById("bookAllFavoritesBtn"),xe=document.getElementById("bookingsPanel"),Ae=document.getElementById("bookingsToggleBtn"),Se=document.getElementById("bookingsCloseBtn"),Me=document.getElementById("bookingsBadge"),G=document.getElementById("bookingsPanelContent"),J=document.getElementById("compareBar"),Te=document.getElementById("compareCount"),X=document.getElementById("compareTray"),$e=document.getElementById("compareNowBtn"),Ce=document.getElementById("clearCompareBtn"),ze=document.getElementById("compareResultsModal"),qe=document.getElementById("compareModalCloseBtn"),I=document.getElementById("compareResultsGrid"),ee=document.getElementById("cfg-body-paint"),b=document.getElementById("cfg-underglow"),te=document.getElementById("cfg-headlight-beam"),ae=document.getElementById("cfg-taillight-beam"),x=document.getElementById("cfg-front-rim"),A=document.getElementById("cfg-rear-rim"),ie=document.getElementById("cfg-front-wheel"),oe=document.getElementById("cfg-rear-wheel"),ve=document.getElementById("configuratorTotalPrice"),Pe=document.getElementById("colorName"),v=document.getElementById("neonUnderglowSwitch"),k=document.getElementById("ledBeamSwitch"),ne=document.getElementById("orderConfiguredCarBtn"),ce=document.querySelectorAll(".color-option"),se=document.querySelectorAll(".rim-option"),le=document.getElementById("valuatorForm"),re=document.getElementById("valuatorPlaceholder"),Ne=document.getElementById("valuatorResults"),He=document.getElementById("valuationAmount"),Fe=document.getElementById("valMarketAvg"),Re=document.getElementById("valConditionAdjust"),De=document.getElementById("valFinalOffer"),Oe=document.getElementById("tradeInApplyBtn"),Ge=document.getElementById("detailsModal"),We=document.getElementById("detailsModalCloseBtn"),de=document.getElementById("detailsMainImg"),me=document.getElementById("detailsThumbGrid"),Ze=document.getElementById("detailsName"),Ke=document.getElementById("detailsPrice"),Ve=document.getElementById("detailsType"),Ye=document.getElementById("detailsAccel"),_e=document.getElementById("detailsPower"),Ue=document.getElementById("detailsRange"),je=document.getElementById("detailsYear"),pe=document.getElementById("detailsBookBtn"),W=document.getElementById("detailsFavoriteBtn"),Qe=document.getElementById("bookingWizardModal"),Je=document.getElementById("bookingWizardCloseBtn"),Xe=document.getElementById("wizardProgress"),et=document.querySelectorAll(".wizard-step"),tt=document.querySelectorAll(".booking-step-panel"),M=document.getElementById("wizardPrevBtn"),T=document.getElementById("wizardNextBtn"),ue=document.getElementById("bookingCarPickerGrid");document.getElementById("bookingWizardForm");const at=document.getElementById("bookingTicket");document.addEventListener("DOMContentLoaded",()=>{lucide.createIcons(),window.addEventListener("scroll",ge),ge(),it(),R.addEventListener("click",()=>{R.classList.toggle("open"),j.classList.toggle("open")}),C&&C.addEventListener("input",E),z&&z.addEventListener("change",E),q&&q.addEventListener("change",E),Q&&Q.addEventListener("click",ot),st(),le&&le.addEventListener("submit",rt),dt(),E(),P(),fe(),_();const t=document.getElementById("mapPin"),e=document.getElementById("mapTooltip");t&&e&&(t.addEventListener("mouseenter",()=>{e.style.opacity="1",e.style.visibility="visible"}),t.addEventListener("mouseleave",()=>{e.style.opacity="0",e.style.visibility="hidden"})),document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(n){n.preventDefault(),R.classList.remove("open"),j.classList.remove("open");const i=document.querySelector(this.getAttribute("href"));i&&window.scrollTo({top:i.offsetTop-80,behavior:"smooth"})})})});function ge(){window.scrollY>50?U.classList.add("scrolled"):U.classList.remove("scrolled")}function h(t){t?(Z.classList.add("active"),document.body.classList.add("modal-open")):(Z.classList.remove("active"),document.body.classList.remove("modal-open"))}function m(){document.querySelectorAll(".side-panel.open, .modal.open").forEach(t=>{t.classList.remove("open")}),h(!1)}function it(){Le.addEventListener("click",()=>{Be.classList.add("open"),h(!0)}),we.addEventListener("click",m),Ae.addEventListener("click",()=>{xe.classList.add("open"),h(!0)}),Se.addEventListener("click",m),Z.addEventListener("click",m),document.addEventListener("keydown",t=>{t.key==="Escape"&&m()}),We.addEventListener("click",m),Je.addEventListener("click",m),qe.addEventListener("click",m)}function E(){let t=C.value.trim().toLowerCase(),e=z.value,a=q.value,n=p.filter(i=>{let o=i.name.toLowerCase().includes(t)||i.type.toLowerCase().includes(t),c=e==="all"||i.category===e;return o&&c});a==="price-asc"?n.sort((i,o)=>i.price-o.price):a==="price-desc"?n.sort((i,o)=>o.price-i.price):a==="hp-desc"&&n.sort((i,o)=>o.hp-i.hp),nt(n)}function ot(){C.value="",z.value="all",q.value="default",E()}function nt(t){if(D.innerHTML="",t.length===0){D.innerHTML=`
      <div class="panel-empty-state" style="grid-column: 1 / -1; padding: 60px 0;">
        <i data-lucide="compass"></i>
        <h3>Axtarışa uyğun avtomobil tapılmadı.</h3>
        <p>Axtarış meyarlarınızı dəyişməyi yoxlayın.</p>
      </div>
    `,lucide.createIcons();return}t.forEach(e=>{const a=d.includes(e.id),n=r.includes(e.id),i=document.createElement("div");i.className="car-card",i.setAttribute("data-id",e.id),i.innerHTML=`
      <span class="car-card-badge">${e.category==="electric"?"Elektrikli":e.category==="hybrid"?"Hibrid":"SUV"}</span>
      <button class="car-card-favorite-btn ${a?"active":""}" onclick="toggleFavorite('${e.id}', event)">
        <i data-lucide="heart"></i>
      </button>

      <div class="car-image-wrapper">
        <img class="car-card-image" src="${e.image}" alt="${e.name}">
      </div>

      <div class="car-card-body">
        <div class="car-card-meta">
          <span class="car-type">${e.type}</span>
          <span class="car-year">${e.year}</span>
        </div>
        <h3 class="car-name">${e.name}</h3>

        <div class="car-specs">
          <div class="spec-item">
            <i data-lucide="zap"></i>
            <span class="spec-value">${e.hp} a.g.</span>
            <span class="spec-label">Güc</span>
          </div>
          <div class="spec-item">
            <i data-lucide="gauge"></i>
            <span class="spec-value">${e.accel}s</span>
            <span class="spec-label">0-100</span>
          </div>
          <div class="spec-item">
            <i data-lucide="battery-charging"></i>
            <span class="spec-value">${e.range} km</span>
            <span class="spec-label">Məsafə</span>
          </div>
        </div>

        <div class="car-card-footer">
          <div class="car-price-block">
            <span class="price-label">Qiymət</span>
            <span class="car-price">${e.price.toLocaleString("az-AZ")} ₼</span>
          </div>
          <div class="car-card-actions">
            <button class="btn-icon ${n?"active":""}" onclick="toggleCompare('${e.id}', event)" title="Müqayisə et">
              <i data-lucide="git-compare"></i>
            </button>
            <button class="btn btn-secondary" onclick="openDetailsModal('${e.id}')" style="padding: 10px 18px; font-size: 13px;">Ətraflı</button>
          </div>
        </div>
      </div>
    `,D.appendChild(i)}),lucide.createIcons()}window.openDetailsModal=function(t){const e=p.find(o=>o.id===t);if(!e)return;Ze.innerText=e.name,Ke.innerText=e.price.toLocaleString("az-AZ")+" ₼",Ve.innerText=e.type,Ye.innerText=e.accel+" san",_e.innerText=e.hp+" at gücü",Ue.innerText=e.range+" km",je.innerText=e.year,de.src=e.images[0],me.innerHTML="",e.images.forEach((o,c)=>{const l=document.createElement("div");l.className=`details-thumb ${c===0?"active":""}`,l.innerHTML=`<img src="${o}" alt="${e.name} detail">`,l.addEventListener("click",()=>{document.querySelectorAll(".details-thumb").forEach(y=>y.classList.remove("active")),l.classList.add("active"),de.src=o}),me.appendChild(l)});const a=d.includes(e.id);W.className=`btn-icon ${a?"active":""}`;const n=W.cloneNode(!0);W.replaceWith(n),n.addEventListener("click",o=>{toggleFavorite(e.id,o);const c=d.includes(e.id);n.className=`btn-icon ${c?"active":""}`});const i=pe.cloneNode(!0);pe.replaceWith(i),i.addEventListener("click",()=>{m(),openBookingWizard(e.id)}),Ge.classList.add("open"),h(!0),lucide.createIcons()};window.toggleFavorite=function(t,e){e&&e.stopPropagation();const a=d.indexOf(t);a===-1?d.push(t):d.splice(a,1),localStorage.setItem("kai_favorites",JSON.stringify(d)),P(),fe(),document.querySelectorAll(".car-card").forEach(i=>{if(i.getAttribute("data-id")===t){const o=i.querySelector(".car-card-favorite-btn");o&&o.classList.toggle("active")}})};function P(){Ie.innerText=d.length,Me.innerText=g.length}function fe(){if(O.innerHTML="",d.length===0){O.innerHTML=`
      <div class="panel-empty-state">
        <i data-lucide="heart"></i>
        <h3>Sevimliləriniz boşdur</h3>
        <p>Bəyəndiyiniz maşınları kataloqdan ürək düyməsinə klikləyərək bura əlavə edə bilərsiniz.</p>
      </div>
    `,K.style.display="none",lucide.createIcons();return}K.style.display="inline-flex";const t=document.createElement("div");t.className="panel-car-list",d.forEach(e=>{const a=p.find(i=>i.id===e);if(!a)return;const n=document.createElement("div");n.className="panel-car-item",n.innerHTML=`
      <img class="panel-car-img" src="${a.image}" alt="${a.name}">
      <div class="panel-car-info">
        <h4>${a.name}</h4>
        <p>${a.price.toLocaleString("az-AZ")} ₼</p>
      </div>
      <button class="panel-car-item-remove" onclick="toggleFavorite('${a.id}', event)">
        <i data-lucide="trash-2"></i>
      </button>
    `,t.appendChild(n)}),O.appendChild(t),lucide.createIcons()}K.addEventListener("click",()=>{m(),d.length>0&&openBookingWizard(d[0])});window.toggleCompare=function(t,e){e&&e.stopPropagation();const a=r.indexOf(t);if(a===-1){if(r.length>=3){alert("Maksimum 3 avtomobili eyni anda müqayisə edə bilərsiniz.");return}r.push(t)}else r.splice(a,1);he(),document.querySelectorAll(".car-card").forEach(i=>{if(i.getAttribute("data-id")===t){const o=i.querySelector(".btn-icon");o&&o.classList.toggle("active")}})};function he(){Te.innerText=r.length,X.innerHTML="",r.length>0?J.classList.add("active"):J.classList.remove("active");for(let t=0;t<3;t++){const e=document.createElement("div");if(e.className="compare-slot",r[t]){const a=p.find(n=>n.id===r[t]);a&&(e.classList.add("filled"),e.innerHTML=`
          <img src="${a.image}" alt="${a.name}">
          <div class="compare-slot-remove" onclick="toggleCompare('${a.id}', event)">
            <i data-lucide="x" style="width: 16px; height: 16px;"></i>
          </div>
        `)}else e.innerHTML='<i data-lucide="plus" style="width: 16px; height: 16px;"></i>';X.appendChild(e)}lucide.createIcons()}Ce.addEventListener("click",()=>{[...r],r=[],he(),document.querySelectorAll(".car-card .btn-icon.active").forEach(t=>{t.classList.remove("active")})});$e.addEventListener("click",()=>{if(r.length<2){alert("Müqayisə etmək üçün ən azı 2 avtomobil seçməlisiniz.");return}ct(),ze.classList.add("open"),h(!0)});function ct(){I.innerHTML="";const t=document.createElement("div");t.className="compare-column compare-label-column",t.innerHTML=`
    <div class="compare-cell-header">KAI MOTORS</div>
    <div class="compare-cell">Sinf / Kateqoriya</div>
    <div class="compare-cell">Buraxılış İli</div>
    <div class="compare-cell">Güc (At Gücü)</div>
    <div class="compare-cell">0-100 km/s Sürətlənmə</div>
    <div class="compare-cell">Yürüş Məsafəsi</div>
    <div class="compare-cell">Qiymət</div>
    <div class="compare-cell">Fəaliyyət</div>
  `,I.appendChild(t),I.style.gridTemplateColumns=`240px repeat(${r.length}, 1fr)`,r.forEach(e=>{const a=p.find(l=>l.id===e);if(!a)return;const n=Math.min(100,a.hp/1200*100),i=Math.max(10,100-(a.accel-1.5)/4*100),o=Math.min(100,a.range/1e3*100),c=document.createElement("div");c.className="compare-column",c.innerHTML=`
      <div class="compare-cell-header">
        <img src="${a.image}" alt="${a.name}">
        <h4>${a.name}</h4>
        <span class="price">${a.price.toLocaleString("az-AZ")} ₼</span>
      </div>
      <div class="compare-cell">${a.type}</div>
      <div class="compare-cell">${a.year}</div>
      
      <!-- Power HP Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${a.hp} a.g.</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${n}%;"></div>
          </div>
        </div>
      </div>

      <!-- Acceleration 0-100 Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${a.accel} san</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${i}%; background: var(--gradient-sport);"></div>
          </div>
        </div>
      </div>

      <!-- Fuel Range Metre -->
      <div class="compare-cell">
        <div class="compare-meter-wrapper">
          <div class="compare-meter-label">
            <span>${a.range} km</span>
          </div>
          <div class="compare-meter-bg">
            <div class="compare-meter-fill" style="width: ${o}%; background: linear-gradient(90deg, #00e676, #00e5ff);"></div>
          </div>
        </div>
      </div>

      <div class="compare-cell" style="font-weight: 800; color: var(--accent-primary);">${a.price.toLocaleString("az-AZ")} ₼</div>
      
      <div class="compare-cell">
        <button class="btn btn-primary" onclick="closeAllPanels(); openBookingWizard('${a.id}');" style="width: 100%; padding: 8px 12px; font-size: 11px;">Rezerv Et</button>
      </div>
    `,I.appendChild(c)})}let ye=0,be=0,V=0,Y=0;const ke=212500;function st(){!v||!k||!ne||(ce.forEach(t=>{t.addEventListener("click",()=>{ce.forEach(c=>c.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-color"),a=t.getAttribute("data-name"),n=parseInt(t.getAttribute("data-price"));ee&&ee.setAttribute("fill",e),v.classList.contains("active")&&b&&b.setAttribute("fill",e);const o=Math.random()*360;ie&&(ie.style.transform=`rotate(${o}deg)`),oe&&(oe.style.transform=`rotate(${o}deg)`),Pe.innerText=a,ye=n,S()})}),se.forEach(t=>{t.addEventListener("click",()=>{se.forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-rim"),a=parseInt(t.getAttribute("data-price"));e==="forged"?(x&&x.setAttribute("stroke","#d4af37"),A&&A.setAttribute("stroke","#d4af37")):(x&&x.setAttribute("stroke","url(#chromeGrad)"),A&&A.setAttribute("stroke","url(#chromeGrad)")),be=a,S()})}),v.addEventListener("click",()=>{if(v.classList.toggle("active"),v.classList.contains("active")){const e=document.querySelector(".color-option.active").getAttribute("data-color");b.setAttribute("fill",e),b.style.opacity="0.75",V=1500}else b.style.opacity="0",V=0;S()}),k.addEventListener("click",()=>{k.classList.toggle("active"),k.classList.contains("active")?(te.style.opacity="0.45",ae.style.opacity="0.4",Y=2800):(te.style.opacity="0",ae.style.opacity="0",Y=0),S()}),ne.addEventListener("click",()=>{const t=document.querySelector(".color-option.active").getAttribute("data-name"),e=document.querySelector(".rim-option.active h5").innerText,a=`Özəlləşdirilmiş KAI Spectre (Rəng: ${t}, Disk: ${e}, Neon: ${v.classList.contains("active")?"Hə":"Yox"}, Lazer: ${k.classList.contains("active")?"Hə":"Yox"}) - Cəmi: ${ve.innerText}`;openBookingWizard("spectre",a)}))}function S(){const t=ke+ye+be+V+Y;lt(ve,t)}function lt(t,e){const a=t.innerText.replace(/[^0-9]/g,""),n=parseInt(a)||ke,i=500,o=performance.now();function c(l){const y=l-o,L=Math.min(y/i,1),u=1-Math.pow(1-L,3),N=Math.floor(n+(e-n)*u);t.innerText=N.toLocaleString("az-AZ")+" ₼",L<1&&requestAnimationFrame(c)}requestAnimationFrame(c)}function rt(t){t.preventDefault();const e=document.getElementById("valBrand").value.trim(),a=document.getElementById("valModel").value.trim(),n=parseInt(document.getElementById("valYear").value),i=parseInt(document.getElementById("valMileage").value),o=document.getElementById("valCondition").value;if(re.innerHTML=`
    <div style="display: flex; flex-direction: column; align-items: center; gap: 24px;">
      <i data-lucide="cpu" class="neon-glow" style="width: 55px; height: 55px; color: var(--accent-primary); animation: rotateGlow 2s infinite linear;"></i>
      <h3>Süni İntellekt Qiymətləndirir...</h3>
      <p style="max-width: 320px;">Avtomobilinizin bazar amortizasiyası və qəza databazası araşdırılır. Zəhmət olmasa gözləyin.</p>
      <div style="width: 200px; height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden; border: 1px solid var(--border-light);">
        <div style="width: 100%; height: 100%; background: var(--gradient-accent); animation: valScanning 1.5s infinite ease-in-out;"></div>
      </div>
    </div>
  `,!document.getElementById("val-scan-style")){const c=document.createElement("style");c.id="val-scan-style",c.innerHTML=`
      @keyframes rotateGlow { 100% { transform: rotate(360deg); } }
      @keyframes valScanning { 
        0% { transform: translateX(-100%); } 
        50% { transform: translateX(100%); } 
        100% { transform: translateX(-100%); } 
      }
    `,document.head.appendChild(c)}lucide.createIcons(),setTimeout(()=>{let c=6e4;const y=Math.max(0,2026-n);let L=c*(1-Math.pow(.92,y)),u=Math.max(1e4,c-L),N=i*.08;u=Math.max(8e3,u-N);let w=0;o==="good"&&(w=.08),o==="fair"&&(w=.22),o==="damaged"&&(w=.45);const H=u*w,F=Math.floor(Math.max(4e3,u-H));He.innerText=F.toLocaleString("az-AZ")+" ₼",Fe.innerText=Math.floor(u).toLocaleString("az-AZ")+" ₼",Re.innerText=H>0?`-${Math.floor(H).toLocaleString("az-AZ")} ₼`:"0 ₼",De.innerText=F.toLocaleString("az-AZ")+" ₼",Oe.onclick=()=>{m();const Ee=`Barter Təklifi: Satılan avtomobil: ${n} ${e} ${a} (${i} km, Vəziyyət: ${o}) - Dəyəri: ${F.toLocaleString("az-AZ")} ₼`;openBookingWizard("spectre",Ee)},re.style.display="none",Ne.style.display="flex"},1800)}let s=1,f="",B="";window.openBookingWizard=function(t,e=""){f=t||p[0].id,B=e,s=1,$(),ue.innerHTML="",p.forEach(i=>{const o=i.id===f,c=document.createElement("div");c.className=`booking-car-card ${o?"selected":""}`,c.addEventListener("click",()=>{document.querySelectorAll(".booking-car-card").forEach(l=>l.classList.remove("selected")),c.classList.add("selected"),f=i.id}),c.innerHTML=`
      <img class="booking-car-img" src="${i.image}" alt="${i.name}">
      <div class="booking-car-name">
        <h4>${i.name}</h4>
        <p>${i.price.toLocaleString("az-AZ")} ₼-dan</p>
      </div>
    `,ue.appendChild(c)});const a=new Date;a.setDate(a.getDate()+1);const n=document.getElementById("bookDate");n&&(n.min=a.toISOString().split("T")[0],n.value=a.toISOString().split("T")[0]),Qe.classList.add("open"),h(!0)};function $(){Xe.style.width=(s-1)/2*100+"%",et.forEach((t,e)=>{const a=e+1;t.className="wizard-step",a<s?t.classList.add("completed"):a===s&&t.classList.add("active")}),tt.forEach((t,e)=>{e+1===s?t.classList.add("active"):t.classList.remove("active")}),s===1?(M.style.visibility="hidden",T.innerHTML='İrəli <i data-lucide="arrow-right"></i>'):s===2?(M.style.visibility="visible",T.innerHTML='Bileti Al <i data-lucide="ticket"></i>'):s===3&&(M.style.visibility="hidden",T.innerHTML='Bağla <i data-lucide="check"></i>'),lucide.createIcons()}function dt(){M.addEventListener("click",()=>{s>1&&(s--,$())}),T.addEventListener("click",()=>{if(s===1){if(!f){alert("Zəhmət olmasa, avtomobil seçin.");return}s++,$()}else if(s===2){const t=document.getElementById("bookName").value.trim(),e=document.getElementById("bookPhone").value.trim(),a=document.getElementById("bookDate").value,n=document.getElementById("bookTime").value;if(!t||!e||!a){alert("Zəhmət olmasa bütün sahələri doldurun.");return}const i=`KAI-${Math.floor(1e3+Math.random()*9e3)}-${String.fromCharCode(65+Math.floor(Math.random()*26))}`,o=p.find(l=>l.id===f),c={ref:i,carId:f,carName:o.name,carImg:o.image,name:t,phone:e,date:a,time:n,notes:B};g.push(c),localStorage.setItem("kai_bookings",JSON.stringify(g)),P(),_(),at.innerHTML=`
        <div class="ticket-header">
          <!-- Small ticket logo -->
          <svg class="ticket-logo" viewBox="0 0 500 500" style="color: var(--accent-primary);">
            <g fill="currentColor">
              <path d="M 60 120 L 110 120 L 110 290 L 60 290 Z" />
              <path d="M 110 205 L 210 120 L 275 120 L 160 215 L 110 205 Z" />
              <path d="M 150 205 L 265 290 L 200 290 L 110 220 L 110 205 Z" />
              <path d="M 270 120 L 335 120 L 400 290 L 345 290 L 302.5 175 L 260 290 L 210 290 L 270 120 Z" />
              <path d="M 410 120 L 460 120 L 460 290 L 410 290 Z" />
            </g>
          </svg>
          <h3>TEST SÜRÜŞÜ BİLETİ</h3>
        </div>

        <div class="ticket-details">
          <div class="ticket-row">
            <span class="ticket-label">Müştəri:</span>
            <span class="ticket-value">${t}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Avtomobil:</span>
            <span class="ticket-value" style="color: var(--accent-primary);">${o.name}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Tarix:</span>
            <span class="ticket-value">${a}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Saat:</span>
            <span class="ticket-value">${n}</span>
          </div>
          ${B?`
          <div class="ticket-row" style="flex-direction: column; gap: 4px; padding-top: 8px; border-top: 1px solid var(--border-light);">
            <span class="ticket-label">Qeyd/İstəklər:</span>
            <span class="ticket-value" style="font-size: 11px; color: var(--text-muted); font-weight: 500;">${B}</span>
          </div>
          `:""}
        </div>

        <div class="ticket-footer">
          <!-- Cyberpunk Mock QR Vector code representation -->
          <div class="ticket-qr">
            <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
              <rect x="0" y="0" width="100" height="100" fill="#fff"/>
              <rect x="10" y="10" width="20" height="20" fill="#000"/>
              <rect x="15" y="15" width="10" height="10" fill="#fff"/>
              <rect x="70" y="10" width="20" height="20" fill="#000"/>
              <rect x="75" y="15" width="10" height="10" fill="#fff"/>
              <rect x="10" y="70" width="20" height="20" fill="#000"/>
              <rect x="15" y="75" width="10" height="10" fill="#fff"/>
              <rect x="40" y="40" width="20" height="20" fill="#000"/>
              <rect x="45" y="45" width="10" height="10" fill="#fff"/>
              <!-- Custom messy bit clusters -->
              <rect x="40" y="10" width="10" height="10" fill="#000"/>
              <rect x="50" y="25" width="10" height="15" fill="#000"/>
              <rect x="15" y="45" width="15" height="10" fill="#000"/>
              <rect x="75" y="40" width="15" height="15" fill="#000"/>
              <rect x="45" y="75" width="20" height="10" fill="#000"/>
              <rect x="75" y="75" width="10" height="15" fill="#000"/>
            </svg>
          </div>
          <div class="ticket-status-block">
            <div class="ticket-ref">${i}</div>
            <div class="ticket-status">Təsdiqləndi</div>
          </div>
        </div>
      `,s++,$()}else s===3&&(m(),document.getElementById("bookName").value="",document.getElementById("bookPhone").value="",B="")})}function _(){if(G.innerHTML="",g.length===0){G.innerHTML=`
      <div class="panel-empty-state">
        <i data-lucide="calendar"></i>
        <h3>Aktiv Rezervasiyanız Yoxdur</h3>
        <p>Hər hansı bir premium modeli yoxlamaq üçün test sürüşü biletini kataloqdan rezervasiya edin.</p>
      </div>
    `,lucide.createIcons();return}const t=document.createElement("div");t.className="panel-car-list",g.forEach((e,a)=>{const n=document.createElement("div");n.className="panel-car-item",n.innerHTML=`
      <img class="panel-car-img" src="${e.carImg}" alt="${e.carName}">
      <div class="panel-car-info">
        <h4>${e.carName}</h4>
        <p style="color: var(--text-main); font-size: 13px; font-weight: 500;"><i data-lucide="clock" style="width: 12px; height: 12px; display: inline; vertical-align: middle; margin-right: 4px;"></i> ${e.date} | ${e.time}</p>
        <span style="font-size: 10px; color: var(--accent-green); font-weight: 800; text-transform: uppercase;">Kod: ${e.ref}</span>
      </div>
      <button class="panel-car-item-remove" onclick="removeBooking(${a}, event)" title="İmtina et">
        <i data-lucide="x-circle"></i>
      </button>
    `,t.appendChild(n)}),G.appendChild(t),lucide.createIcons()}window.removeBooking=function(t,e){e&&e.stopPropagation(),confirm("Bu test sürüşü rezervasiyasından imtina etmək istədiyinizə əminsiniz?")&&(g.splice(t,1),localStorage.setItem("kai_bookings",JSON.stringify(g)),P(),_())};const mt=document.querySelectorAll(".faq-header");mt.forEach(t=>{t.addEventListener("click",()=>{const e=t.parentElement,a=e.querySelector(".faq-body"),n=e.classList.contains("active");document.querySelectorAll(".faq-item.active").forEach(i=>{i!==e&&(i.classList.remove("active"),i.querySelector(".faq-body").style.maxHeight="0")}),e.classList.toggle("active"),n?a.style.maxHeight="0":a.style.maxHeight=a.scrollHeight+"px"})});
