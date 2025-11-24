export default function PrivacidadPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Política de Privacidad</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Información que Recopilamos</h2>
          <p className="leading-relaxed mb-3">
            Recopilamos información personal cuando realiza una compra en nuestro sitio:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Nombre completo</li>
            <li>Dirección de envío</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico</li>
            <li>Información de pago (procesada de forma segura por nuestros proveedores)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Uso de la Información</h2>
          <p className="leading-relaxed mb-3">Utilizamos su información personal para:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Procesar y enviar sus pedidos</li>
            <li>Comunicarnos con usted sobre su compra</li>
            <li>Enviar actualizaciones sobre el estado de su envío</li>
            <li>Mejorar nuestros productos y servicios</li>
            <li>Enviar ofertas y promociones (solo si usted lo autoriza)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Protección de Datos</h2>
          <p className="leading-relaxed">
            Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra
            acceso no autorizado, pérdida o alteración. Sus datos de pago son procesados a través de plataformas seguras
            y encriptadas que cumplen con los estándares PCI DSS.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Compartir Información</h2>
          <p className="leading-relaxed mb-3">Solo compartimos su información con:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Coordinadora (empresa de envíos) para entregar su pedido</li>
            <li>Procesadores de pago para completar transacciones</li>
            <li>Autoridades legales si es requerido por ley</li>
          </ul>
          <p className="leading-relaxed mt-3">Nunca vendemos ni alquilamos su información personal a terceros.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies</h2>
          <p className="leading-relaxed">
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web, analizar el tráfico y personalizar
            contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas
            funcionalidades del sitio.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Sus Derechos</h2>
          <p className="leading-relaxed mb-3">Conforme a la Ley 1581 de 2012 de Colombia, usted tiene derecho a:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada</li>
            <li>Ser informado sobre el uso de sus datos</li>
            <li>Revocar la autorización y solicitar la supresión de sus datos</li>
            <li>Acceder gratuitamente a sus datos personales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Retención de Datos</h2>
          <p className="leading-relaxed">
            Conservamos su información personal durante el tiempo necesario para cumplir con los fines descritos en esta
            política, a menos que la ley requiera o permita un período de retención más largo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios a Esta Política</h2>
          <p className="leading-relaxed">
            Podemos actualizar esta política de privacidad ocasionalmente. Le notificaremos sobre cambios significativos
            publicando la nueva política en esta página con una fecha de actualización revisada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Contacto</h2>
          <p className="leading-relaxed">
            Para ejercer sus derechos o consultas sobre privacidad, contáctenos a: privacidad@amazoniico.com
          </p>
        </section>

        <p className="text-sm mt-8 pt-8 border-t border-border">Última actualización: Noviembre 2024</p>
      </div>
    </div>
  )
}
