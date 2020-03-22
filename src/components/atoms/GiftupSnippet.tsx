import { useEffect } from 'react';

const Script = props => {
  useEffect(() => {
    const script = document.createElement('script');

    script.innerHTML = `(function (g, i, f, t, u, p, s) {
        g[u] = g[u] || function() { (g[u].q = g[u].q || []).push(arguments) };
        p = i.createElement(f);
        p.async = 1;
        p.src = t;
        s = i.getElementsByTagName(f)[0];
        s.parentNode.insertBefore(p, s);
    })(window, document, "script", "https://cdn.giftup.app/dist/gift-up.js", "giftup");
  `;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  });

  return <div />
};

export default Script;
