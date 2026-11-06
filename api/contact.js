/**
 * Vercel Serverless Function for POST /api/contact
 * Supports forwarding contact form submissions via Web3Forms (if WEB3FORMS_ACCESS_KEY is configured in Vercel)
 * or returning 501 so the client gracefully opens a pre-filled mailto:trailsora@gmail.com.
 */
export async function POST(request) {
  try {
    const formData = await request.formData();

    // Honeypot check
    if (formData.get('bot_field')) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Falten camps obligatoris.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (accessKey) {
      const payload = new FormData();
      payload.append('access_key', accessKey);
      payload.append('subject', `Nou missatge al web Trail de Sora de ${name}`);
      payload.append('name', name);
      payload.append('email', email);
      payload.append('message', message);

      const upstream = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      });

      if (upstream.ok) {
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response(
      JSON.stringify({ ok: false, fallback: 'mailto' }),
      { status: 501, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Error processant el formulari.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

