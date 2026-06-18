export default function Touch() {
  return (
    <section
      id="touch"
      data-idx="Contact"
      data-fluid='{"CURL":20,"SPLAT_FORCE":4600,"BLOOM_INTENSITY":1.05,"DENSITY_DISSIPATION":0.7,"palette":"ink"}'
    >
      <div className="center wrap grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[30px] lg:gap-[50px] items-center text-center lg:text-left">
        <div className="flex flex-col items-center lg:items-start">
          {/* <div className="eyebrow reveal" style={{ color: 'var(--teal)' }}>Get in touch</div> */}
          <h2 className="big reveal" style={{ fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.0, color: 'var(--ink)' }}>
            Let&rsquo;s <span className="s g">Talk.</span>
          </h2>
          <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '16px', lineHeight: 1.5, maxWidth: '38ch' }} className="mx-auto lg:mx-0">
            Have a project idea, a scaling requirement, or want to discuss analytics? Drop us a message and we will get back to you within 24 hours.
          </p>
        </div>
        <div style={{ background: 'rgba(255, 255, 255, 0.85)', padding: '30px', borderRadius: '18px', border: '1px solid var(--line)', boxShadow: '0 10px 40px rgba(16,43,114,0.04)' }} className="reveal clipUp w-full max-w-[540px] mx-auto text-left">
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--faint)', marginBottom: '6px' }}>FIRST NAME</label>
                <input type="text" placeholder="John" style={{ width: '100%', background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: 'var(--ink)', outline: 'none' }} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--faint)', marginBottom: '6px' }}>LAST NAME</label>
                <input type="text" placeholder="Doe" style={{ width: '100%', background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: 'var(--ink)', outline: 'none' }} />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--faint)', marginBottom: '6px' }}>YOUR EMAIL</label>
              <input type="email" placeholder="john@example.com" style={{ width: '100%', background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: 'var(--ink)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--faint)', marginBottom: '6px' }}>PHONE NUMBER</label>
              <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: 'var(--ink)', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '11px', fontFamily: 'var(--mono)', color: 'var(--faint)', marginBottom: '6px' }}>YOUR MESSAGE</label>
              <textarea placeholder="Tell us about your project..." rows={4} style={{ width: '100%', background: '#ffffff', border: '1px solid var(--line)', borderRadius: '8px', padding: '12px 16px', fontSize: '14px', color: 'var(--ink)', outline: 'none', resize: 'none' }}></textarea>
            </div>
            <button type="submit" className="btn" style={{ border: 'none', background: 'var(--grad)', color: '#ffffff', padding: '14px', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '14px', textAlign: 'center' }}>
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
