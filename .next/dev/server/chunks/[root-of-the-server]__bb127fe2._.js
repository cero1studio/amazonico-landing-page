module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/repos/v0-amazonico-landing-page/app/api/wompi/create-session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/repos/v0-amazonico-landing-page/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        // Validar solo datos mínimos requeridos - Wompi pedirá el resto
        if (!body.amount) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'El monto es requerido'
            }, {
                status: 400
            });
        }
        // Credenciales de Wompi (deben estar en variables de entorno)
        const WOMPI_PUBLIC_KEY = ("TURBOPACK compile-time value", "pub_prod_iCPxPORTr1JAzXiCtYwdCbWe23Z8bhfr");
        const WOMPI_PRIVATE_KEY = process.env.WOMPI_PRIVATE_KEY;
        const WOMPI_INTEGRITY_KEY = process.env.WOMPI_INTEGRITY_KEY;
        const WOMPI_ENVIRONMENT = process.env.WOMPI_ENVIRONMENT || 'test' // 'test' o 'production'
        ;
        if (!WOMPI_PUBLIC_KEY || !WOMPI_PRIVATE_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Configuración de Wompi incompleta'
            }, {
                status: 500
            });
        }
        const baseUrl = WOMPI_ENVIRONMENT === 'production' ? 'https://production.wompi.co/v1' : 'https://sandbox.wompi.co/v1';
        // Crear referencia única
        const reference = body.reference || `AMAZONIICO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        // Descripción del producto
        const description = body.description || 'Amazoniico Colágeno Marino';
        // Validar que el monto sea válido
        const amountInCents = Math.round(body.amount * 100);
        if (amountInCents <= 0 || isNaN(amountInCents)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'El monto debe ser mayor a 0'
            }, {
                status: 400
            });
        }
        // Preparar datos para crear payment link en Wompi
        // Estructura según documentación de Wompi payment_links
        const checkoutData = {
            name: body.productName || 'Amazoniico Colágeno Marino',
            description: description.substring(0, 300),
            single_use: false,
            collect_shipping: true,
            currency: body.currency || 'COP',
            amount_in_cents: amountInCents,
            redirect_url: `${("TURBOPACK compile-time value", "https://amazoniico.com") || 'http://localhost:3000'}/checkout/success?reference=${encodeURIComponent(reference)}`
        };
        // Agregar customer_data opcional si se proporciona (para pre-llenar formulario)
        if (body.email || body.name) {
            checkoutData.customer_data = {};
            if (body.email) {
                checkoutData.customer_data.email = body.email;
            }
            if (body.name) {
                checkoutData.customer_data['full-name'] = body.name;
            }
        }
        // Agregar meta con información del producto si está disponible
        if (body.items) {
            checkoutData.meta = {
                items: JSON.stringify(body.items),
                reference: reference
            };
        }
        console.log('Enviando a Wompi:', {
            url: `${baseUrl}/payment_links`,
            data: {
                ...checkoutData,
                amount_in_cents: checkoutData.amount_in_cents
            }
        });
        // Crear payment link en Wompi (el endpoint correcto)
        const wompiResponse = await fetch(`${baseUrl}/payment_links`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${WOMPI_PRIVATE_KEY}`
            },
            body: JSON.stringify(checkoutData)
        });
        if (!wompiResponse.ok) {
            let errorData = {};
            let errorText = '';
            try {
                errorText = await wompiResponse.text();
                errorData = JSON.parse(errorText);
            } catch (e) {
                errorData = {
                    raw: errorText
                };
            }
            console.error('Error de Wompi:', {
                status: wompiResponse.status,
                statusText: wompiResponse.statusText,
                error: errorData,
                errorText: errorText,
                requestData: checkoutData
            });
            // Extraer mensaje de error más descriptivo de diferentes formatos posibles
            const errorMessage = errorData?.error?.message || errorData?.error?.reason || errorData?.message || errorData?.error?.type || errorData?.error?.code || errorText || `Error ${wompiResponse.status}: ${wompiResponse.statusText}`;
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Error al crear sesión de pago en Wompi',
                message: errorMessage,
                details: errorData,
                status: wompiResponse.status,
                statusText: wompiResponse.statusText
            }, {
                status: wompiResponse.status
            });
        }
        const wompiData = await wompiResponse.json();
        console.log('Respuesta de Wompi:', wompiData);
        // Extraer el ID del payment link de la respuesta
        const paymentLinkId = wompiData.data?.id || wompiData.id;
        // Validar que recibimos el ID
        if (!paymentLinkId) {
            console.error('Respuesta de Wompi sin ID:', wompiData);
            return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'No se recibió el ID del payment link de Wompi'
            }, {
                status: 500
            });
        }
        // Construir el permalink manualmente según documentación de Wompi
        // Estructura: https://checkout.wompi.co/l/{PAYMENT_LINK_ID}
        const checkoutUrl = `https://checkout.wompi.co/l/${paymentLinkId}`;
        console.log('Payment link creado exitosamente:', {
            id: paymentLinkId,
            url: checkoutUrl,
            reference
        });
        // Retornar URL de checkout construida manualmente
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            checkoutUrl,
            reference,
            sessionId: paymentLinkId
        });
    } catch (error) {
        console.error('Error en create-session:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$repos$2f$v0$2d$amazonico$2d$landing$2d$page$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bb127fe2._.js.map