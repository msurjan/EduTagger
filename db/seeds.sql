-- Database Seed file for EduTagger MVP
-- Inserts the corrected geological data for Pórfido Cuprífero (ref. Collahuasi)

INSERT INTO yacimientos (
    id_tipo,
    nombre_tipo,
    sinonimos,
    franja_metalogenica,
    region_mvp,
    estado,
    
    -- Clearance legal
    permiso_estado,
    permiso_ref,
    permiso_alcance,
    jurisdiccion,
    
    -- Procedencia
    operador,
    geologo_contacto,
    ubicacion_real,
    notas_internas,
    
    -- Contenido pedagogico
    contexto_regional,
    modelo_genetico,
    minerales_presentes,
    rasgos_diagnosticos,
    material_referencia,
    profundizacion_opcional,
    autor,
    validador,
    
    -- Sets de imagenes
    sets,
    etiqueta_publica,
    
    -- Confundibles (look-alikes)
    confundibles,
    
    -- Ejercicio de inferencia
    consigna,
    clave_respuesta,
    rubrica
) VALUES (
    'pcu',
    'Pórfido Cuprífero',
    '["pórfido de cobre", "pórfido de cobre-molibdeno", "pórfido Cu-Mo"]'::jsonb,
    'Franja de pórfidos del Eoceno tardío–Oligoceno temprano del norte de Chile',
    'Norte de Chile (Cordillera)',
    'EN_CURACION',
    
    -- Clearance legal (Private)
    'en_negociacion',
    'REF-PCU-COLLAHUASI-DRAFT',
    'Piloto interno educativo con datos públicos y placeholders',
    'CL',
    
    -- Procedencia (Private)
    'Cía. Minera Doña Inés de Collahuasi (Anglo American / Glencore / Japan Collahuasi Resources)',
    'CEO Graiph / Biblioteca de literatura pública',
    'Rosario, Ujina; distrito Collahuasi, Tarapacá, Chile',
    'Compilado de literatura pública para demo interno. Distrito de referencia es la ocurrencia más septentrional de esta franja.',
    
    -- Contenido pedagogico
    'Los pórfidos están hospedados en una secuencia volcánica-sedimentaria del Paleozoico superior–Triásico inferior (basamento pérmico), con metamorfismo regional de bajo grado (facies esquisto verde inferior) previo a la mineralización. El emplazamiento y la posterior alteración supergénica están controlados estructuralmente (sistema de fallas regional tipo Domeyko / fallas distritales).',
    'Sistema de pórfido Cu–Mo formado por intrusiones félsicas-intermedias y fluidos hidrotermales; el cuerpo porfírico de referencia tiene edad ~34 Ma (Oligoceno). Sobre el núcleo porfírico se superponen vetas epitermales de alta sulfuración Cu-Ag-(Au). Posteriormente, lixiviación supergénica genera una zona de enriquecimiento secundario.',
    '[
        {"tipo": "Hipógenos", "minerales": ["Calcopirita (CuFeS₂)", "Bornita", "Molibdenita (MoS₂)"]},
        {"tipo": "Supergénicos", "minerales": ["Calcosina (chalcocita)"]},
        {"tipo": "Óxidos", "minerales": ["Crisocola", "Brochantita", "Cobre nativo"]},
        {"tipo": "Zonación", "descripcion": "Halo externo rico en pirita / pobre en calcopirita -> núcleo con bornita (+/- digenita) de mayor ley; el Mo se concentra en la parte central/temprana."}
    ]'::jsonb,
    '[
        {"nombre": "Alteración Potásica", "descripcion": "Núcleo de alta temperatura, presencia de biotita secundaria y/o feldespato potásico."},
        {"nombre": "Alteración Propilítica", "descripcion": "Halo externo de menor temperatura, caracterizado por clorita, epidota y calcita."},
        {"nombre": "Alteración Cuarzo-Sericítica (Fílica)", "descripcion": "Sobreimpuesta a la potásica, caracterizada por asociación cuarzo-sericita-pirita."},
        {"nombre": "Alteración Argílica", "descripcion": "Presencia de minerales de arcilla por hidrólisis."},
        {"nombre": "Alteración Argílica Avanzada", "descripcion": "Ligada a vetas epitermales de alta sulfuración superpuestas al sistema."}
    ]'::jsonb,
    '[
        {"titulo": "Mining-Technology Profile", "url": "https://www.mining-technology.com/"},
        {"titulo": "Mining Data Online ROSARIO Project", "url": "https://www.miningdataonline.com/"},
        {"titulo": "Tesis U. Tasmania (Geocronología)", "url": "https://figshare.com/"}
    ]'::jsonb,
    'El yacimiento Rosario presenta una edad de mineralización hidrotermal y emplazamiento magmático en el límite Eoceno-Oligoceno (aprox. 34.4 Ma). El basamento geológico local influye en la firma geoquímica inicial.',
    'Practicante Graiph / Compilado Literario',
    'CEO Graiph (Pendiente validación de geólogo validador)',
    
    -- Sets de imagenes
    '[
        {
            "id_imagen": "pcu_img_01",
            "url": "https://images.unsplash.com/photo-1615627186415-ee4f21655768?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Contacto Intrusivo y Alteración Potásica",
            "descripcion": "Muestra de roca porfídica con parches de feldespato potásico (rosado) y biotita secundaria oscura. Se aprecian las primeras vetillas de cuarzo tempranas con sulfuros finos diseminados."
        },
        {
            "id_imagen": "pcu_img_02",
            "url": "https://images.unsplash.com/photo-1599740831146-80a63eea9091?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Red de Vetillas de Cuarzo (Stockwork)",
            "descripcion": "Densa red tridimensional (stockwork) de vetillas de cuarzo con calcopirita (amarillo dorado metal) y bornita (reflejos azulados/morados) cortando la roca huésped."
        },
        {
            "id_imagen": "pcu_img_03",
            "url": "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Sobreimposición Fílica (Sericita-Pirita)",
            "descripcion": "Testigo donde la textura original de la roca está casi completamente borrada por una intensa alteración cuarzo-sericítica (color gris claro mate) con abundante pirita cúbica diseminada."
        },
        {
            "id_imagen": "pcu_img_04",
            "url": "https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Zona Propilítica Externa",
            "descripcion": "Testigo con tonalidad verdosa característica debido a la presencia abundante de clorita y epidota (alteración propilítica). La mineralización de cobre es prácticamente ausente, dominando la pirita diseminada."
        },
        {
            "id_imagen": "pcu_img_05",
            "url": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Enriquecimiento Secundario (Supergénico)",
            "descripcion": "Zona superior del depósito lixiviada donde se observa reemplazo de sulfuros primarios por calcosina (color gris oscuro/negro brillante) recubriendo pirita, lo que incrementa notablemente la ley de cobre."
        },
        {
            "id_imagen": "pcu_img_06",
            "url": "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800&auto=format&fit=crop&q=60",
            "etiqueta_publica": "Zona de Óxidos de Cobre",
            "descripcion": "Testigo superficial con fuerte coloración verde-azulada debido a minerales oxidados de cobre como crisocola y brochantita, resultantes de la alteración meteorológica de los sulfuros bajo el nivel freático."
        }
    ]'::jsonb,
    'Pórfido Cuprífero del Eoceno-Oligoceno del Norte de Chile',
    
    -- Confundibles (look-alikes)
    '[
        {
            "nombre": "Skarn de Cobre (Cu)",
            "diferencia_clave": "El Skarn suele presentar silicatos cálcicos verdosos o cafés (como granate y piroxeno) y carece de la textura de vetillas en stockwork (red tridimensional) característica del pórfido.",
            "imagen_placeholder": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400"
        },
        {
            "nombre": "Epitermal de Alta Sulfuración",
            "diferencia_clave": "Aunque puede coexistir espacialmente y superponerse al pórfido, se distingue por presentar fuerte alteración argílica avanzada con texturas de vetas masivas de cuarzo vuggy y no la red densa de microvetillas stockwork.",
            "imagen_placeholder": "https://images.unsplash.com/photo-1602562775100-bdc3a2ab65a1?w=400"
        }
    ]'::jsonb,
    
    -- Ejercicio de inferencia
    'Un testigo muestra una densa red de vetillas de cuarzo con calcopirita y bornita en el centro, rodeadas de parches de biotita marrón y feldespato rosado. Sin embargo, en algunas zonas se observa que la sericita y la pirita están reemplazando a la biotita original. A partir de la observación metalogenética: 1) Identifica la alteración primaria y la alteración sobreimpuesta. 2) Explica qué proceso térmico y químico causó este cambio. 3) Si realizas un sondaje 400 metros hacia los márgenes externos, ¿qué alteración diagnóstica y qué mineralogía esperarías encontrar?',
    '{
        "alteracion_primaria": "Alteración Potásica (biotita y feldespato potásico) formada por fluidos magmáticos de alta temperatura.",
        "alteracion_sobreimpuesta": "Alteración Fílica o Cuarzo-Sericítica (sericita y pirita) formada por fluidos meteóricos tardíos más fríos y ácidos.",
        "proceso": "Enfriamiento del sistema y colapso de la celda hidrotermal, permitiendo que agua meteórica ácida lave el potasio y sobreimponga sericita-pirita.",
        "periferia": "Alteración Propilítica caracterizada por clorita, epidota, calcita y magnetita/pirita, con escaso o nulo contenido de cobre."
    }'::jsonb,
    '{
        "criterios": [
            {
                "item": "Identificación de Alteraciones",
                "puntaje_max": 3,
                "descripcion": "Identifica correctamente la alteración potásica como primaria y la fílica como sobreimpuesta (1.5 pts c/u)."
            },
            {
                "item": "Explicación del Proceso Hidrotermal",
                "puntaje_max": 3,
                "descripcion": "Explica el colapso del sistema hidrotermal y el ingreso de fluidos meteóricos tardíos y fríos."
            },
            {
                "item": "Predicción Periférica",
                "puntaje_max": 4,
                "descripcion": "Predice correctamente la zona propilítica externa y su mineralogía típica (clorita, epidota) con menor ley de cobre."
            }
        ]
    }'::jsonb
)
ON CONFLICT (id_tipo) 
DO UPDATE SET
    nombre_tipo = EXCLUDED.nombre_tipo,
    sinonimos = EXCLUDED.sinonimos,
    franja_metalogenica = EXCLUDED.franja_metalogenica,
    region_mvp = EXCLUDED.region_mvp,
    estado = EXCLUDED.estado,
    permiso_estado = EXCLUDED.permiso_estado,
    permiso_ref = EXCLUDED.permiso_ref,
    permiso_alcance = EXCLUDED.permiso_alcance,
    jurisdiccion = EXCLUDED.jurisdiccion,
    operador = EXCLUDED.operador,
    geologo_contacto = EXCLUDED.geologo_contacto,
    ubicacion_real = EXCLUDED.ubicacion_real,
    notas_internas = EXCLUDED.notas_internas,
    contexto_regional = EXCLUDED.contexto_regional,
    modelo_genetico = EXCLUDED.modelo_genetico,
    minerales_presentes = EXCLUDED.minerales_presentes,
    rasgos_diagnosticos = EXCLUDED.rasgos_diagnosticos,
    material_referencia = EXCLUDED.material_referencia,
    profundizacion_opcional = EXCLUDED.profundizacion_opcional,
    autor = EXCLUDED.autor,
    validador = EXCLUDED.validador,
    sets = EXCLUDED.sets,
    etiqueta_publica = EXCLUDED.etiqueta_publica,
    confundibles = EXCLUDED.confundibles,
    consigna = EXCLUDED.consigna,
    clave_respuesta = EXCLUDED.clave_respuesta,
    rubrica = EXCLUDED.rubrica;
