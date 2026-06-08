-- Migration 0001: Create Yacimientos and Progreso Tables

-- 1. Yacimientos Table (Holds metadata, legal, private provenance, pedagogical contents, images, and exercises)
CREATE TABLE IF NOT EXISTS yacimientos (
    id_tipo VARCHAR(50) PRIMARY KEY,
    nombre_tipo VARCHAR(100) NOT NULL,
    sinonimos JSONB DEFAULT '[]'::jsonb,
    franja_metalogenica VARCHAR(255) NOT NULL,
    region_mvp VARCHAR(255),
    estado VARCHAR(50) NOT NULL DEFAULT 'LOCKED' CHECK (estado IN ('LOCKED', 'EN_CURACION', 'PUBLICADO')),
    
    -- Clearance legal (CONTROL - Private)
    permiso_estado VARCHAR(50) NOT NULL DEFAULT 'sin_gestion' CHECK (permiso_estado IN ('sin_gestion', 'en_negociacion', 'escrito_firmado')),
    permiso_ref VARCHAR(255),
    permiso_alcance TEXT,
    jurisdiccion VARCHAR(10) CHECK (jurisdiccion IN ('CL', 'BR', 'US')),
    
    -- Procedencia (Private)
    operador VARCHAR(255),
    geologo_contacto VARCHAR(255),
    ubicacion_real VARCHAR(255),
    notas_internas TEXT,
    
    -- Contenido pedagogico (Public)
    contexto_regional TEXT,
    modelo_genetico TEXT,
    minerales_presentes JSONB DEFAULT '[]'::jsonb,
    rasgos_diagnosticos JSONB DEFAULT '[]'::jsonb,
    material_referencia JSONB DEFAULT '[]'::jsonb,
    profundizacion_opcional TEXT,
    autor VARCHAR(255),
    validador VARCHAR(255),
    
    -- Sets de imagenes
    sets JSONB DEFAULT '[]'::jsonb,
    etiqueta_publica VARCHAR(255),
    
    -- Confundibles (look-alikes)
    confundibles JSONB DEFAULT '[]'::jsonb,
    
    -- Ejercicio de inferencia
    consigna TEXT,
    clave_respuesta JSONB DEFAULT '{}'::jsonb,
    rubrica JSONB DEFAULT '{}'::jsonb,
    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Progreso Estudiantes Table (Holds student interaction states anonymously)
CREATE TABLE IF NOT EXISTS progreso_estudiantes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    session_id VARCHAR(100) NOT NULL, -- Anonymous unique string for session
    id_tipo VARCHAR(50) NOT NULL REFERENCES yacimientos(id_tipo) ON DELETE CASCADE,
    paso_actual INTEGER NOT NULL DEFAULT 1,
    max_paso_alcanzado INTEGER NOT NULL DEFAULT 1,
    observaciones JSONB DEFAULT '[]'::jsonb,
    reflexiones JSONB DEFAULT '[]'::jsonb,
    respuesta_inferencia TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create shared updated_at automatic updates function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for both tables
CREATE OR REPLACE TRIGGER update_yacimientos_updated_at
    BEFORE UPDATE ON yacimientos
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER update_progreso_estudiantes_updated_at
    BEFORE UPDATE ON progreso_estudiantes
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
