export default function DevolucionesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-balance">Política de Devoluciones</h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Garantía de Satisfacción</h2>
          <p className="leading-relaxed">
            En Amazoniico, estamos comprometidos con su satisfacción. Si por alguna razón no está completamente
            satisfecho con su compra, puede solicitar una devolución siguiendo los términos descritos a continuación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">2. Período de Devolución</h2>
          <p className="leading-relaxed mb-3">Aceptamos devoluciones bajo las siguientes condiciones:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Dentro de los primeros 30 días después de la compra</li>
            <li>El producto debe estar sellado y sin abrir</li>
            <li>Debe incluir el empaque original y todos los accesorios</li>
            <li>Debe presentar comprobante de compra (recibo o número de orden)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Productos Elegibles</h2>
          <p className="leading-relaxed mb-3">Se aceptan devoluciones en los siguientes casos:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Producto dañado durante el envío</li>
            <li>Producto defectuoso de fábrica</li>
            <li>Producto diferente al pedido</li>
            <li>Sello de seguridad roto o violado al momento de la entrega</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Productos NO Elegibles</h2>
          <p className="leading-relaxed mb-3">NO aceptamos devoluciones en los siguientes casos:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Productos abiertos o parcialmente consumidos</li>
            <li>Cambio de opinión después de abrir el producto</li>
            <li>Alergias o intolerancias personales (consulte ingredientes antes de comprar)</li>
            <li>Después de 30 días de la compra</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Proceso de Devolución</h2>
          <p className="leading-relaxed mb-3">Para iniciar una devolución:</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Contáctenos a: devoluciones@amazoniico.com</li>
            <li>Proporcione su número de orden y motivo de devolución</li>
            <li>Adjunte fotos del producto si aplica (daños o defectos)</li>
            <li>Espere la autorización de devolución (24-48 horas)</li>
            <li>Envíe el producto a la dirección proporcionada</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">6. Costos de Envío de Devolución</h2>
          <p className="leading-relaxed mb-3">Los costos de envío de devolución dependen del motivo:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Producto dañado o defectuoso: Amazoniico cubre el costo de devolución</li>
            <li>Error en el pedido: Amazoniico cubre el costo de devolución</li>
            <li>Otros motivos: El cliente asume el costo de envío de devolución</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Reembolsos</h2>
          <p className="leading-relaxed mb-3">Una vez recibido y aprobado su producto devuelto:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Procesaremos el reembolso en 5-7 días hábiles</li>
            <li>El reembolso se realizará al método de pago original</li>
            <li>Recibirá confirmación por correo electrónico</li>
            <li>El tiempo de acreditación depende de su entidad bancaria (3-10 días hábiles)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Cambios</h2>
          <p className="leading-relaxed">
            No realizamos cambios directos. Si desea un producto diferente, debe procesar una devolución y realizar una
            nueva compra por separado.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">9. Excepciones por Seguridad</h2>
          <p className="leading-relaxed">
            Por razones de salud y seguridad, los suplementos alimenticios no pueden ser revendidos una vez que salen de
            nuestras instalaciones. Por lo tanto, solo aceptamos devoluciones de productos sellados y sin abrir.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">10. Contacto</h2>
          <p className="leading-relaxed">
            Para iniciar una devolución o hacer consultas:
            <br />
            Email: devoluciones@amazoniico.com
            <br />
            Teléfono: +57 (1) 234-5678
            <br />
            Horario de atención: Lunes a Viernes, 9:00 AM - 6:00 PM
          </p>
        </section>

        <p className="text-sm mt-8 pt-8 border-t border-border">Última actualización: Noviembre 2024</p>
      </div>
    </div>
  )
}
