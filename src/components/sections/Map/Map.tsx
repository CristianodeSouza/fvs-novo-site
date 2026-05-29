'use client'

export interface MapProps {
  latitude?: number
  longitude?: number
  zoom?: number
  markerTitle?: string
}

export const Map = ({
  latitude = -29.3804,
  longitude = -51.4097,
  zoom = 15,
  markerTitle = 'FVS Incorporações',
}: MapProps) => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

  return (
    <div className="w-full h-full bg-nevoa rounded-lg overflow-hidden">
      <iframe
        title={markerTitle}
        width="100%"
        height="100%"
        frameBorder="0"
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.8850747625963!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197e0f0f0f0f0f%3A0x0f0f0f0f0f0f0f0f!2s${markerTitle}!5e0!3m2!1spt-BR!2sbr!4v1234567890`}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Fallback text if Google Maps doesn't load */}
      <div className="w-full h-full flex items-center justify-center bg-nevoa">
        <div className="text-center">
          <p className="text-preto-quente font-light mb-md">
            {markerTitle}
          </p>
          <p className="text-sm text-preto-quente/60">
            Gramado, Rio Grande do Sul, Brasil
          </p>
        </div>
      </div>
    </div>
  )
}

export default Map
