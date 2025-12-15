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
"[project]/app/api/wompi/create-session/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
async function POST(request) {
    try {
        const body = await request.json();
        // Validar solo datos básicos requeridos
        const requiredFields = [
            'name',
            'email',
            'phone',
            'amount'
        ];
        for (const field of requiredFields){
            if (!body[field]) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    error: `Campo requerido faltante: ${field}`
                }, {
                    status: 400
                });
            }
        }
        // Credenciales de Wompi
        const WOMPI_PUBLIC_KEY = ("TURBOPACK compile-time value", "pub_test_U8XbzsdEWaIR1vXje0LKuGf4yQjcehH2");
        const WOMPI_ENVIRONMENT = process.env.WOMPI_ENVIRONMENT || 'test';
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Crear referencia única
        const reference = body.reference || `AMAZONIICO-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        // Construir descripción desde cartItems o description
        let description = body.description || 'Amazoniico Colágeno Marino';
        if (body.cartItems && Array.isArray(body.cartItems) && body.cartItems.length > 0) {
            const itemsDescription = body.cartItems.map((item)=>`${item.quantity}x ${item.name}`).join(', ');
            description = `Amazoniico Colágeno Marino - ${itemsDescription}`;
        }
        // Construir URL del widget de Wompi con todos los parámetros
        const amountInCents = Math.round(body.amount * 100);
        const redirectUrl = `${("TURBOPACK compile-time value", "http://localhost:3000") || 'http://localhost:3000'}/checkout/success?reference=${encodeURIComponent(reference)}`;
        // No preseleccionar método de pago - el usuario lo seleccionará en Wompi
        const widgetParams = new URLSearchParams({
            'public-key': WOMPI_PUBLIC_KEY,
            'currency': 'COP',
            'amount-in-cents': amountInCents.toString(),
            'reference': reference,
            'redirect-url': redirectUrl
        });
        // Agregar solo datos básicos del cliente (el resto se completa en Wompi)
        if (body.email) widgetParams.append('customer-data:email', body.email);
        if (body.name) widgetParams.append('customer-data:full-name', body.name);
        if (body.phone) widgetParams.append('customer-data:phone-number', body.phone);
        const baseUrl = WOMPI_ENVIRONMENT === 'production' ? 'https://checkout.wompi.co/p/' : 'https://checkout.wompi.co/p/';
        const checkoutUrl = `${baseUrl}?${widgetParams.toString()}`;
        console.log('URL de checkout generada:', checkoutUrl);
        console.log('Descripción:', description);
        // Retornar URL de checkout
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            checkoutUrl,
            reference,
            sessionId: reference
        });
    } catch (error) {
        console.error('Error en create-session:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Error interno del servidor',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__715b4118._.js.map