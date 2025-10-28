export default function Analytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4PR7PYZM0S"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4PR7PYZM0S');
          `,
        }}
      />
    </>
  )
}

