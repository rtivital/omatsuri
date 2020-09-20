import React from 'react';
import settings from '../../settings';

export default function Application() {
  return (
    <div>
      <h2>About Omatsuri</h2>
      <p>
        Omatsuri translates to «festival» from Japanese (お祭り) and here we have a small festival
        of applications. It was built with strong respect to your privacy – you will never see ads
        and it does not include analytics services (or actually any services at all). You are highly
        encouraged to explore <a href={settings.repository}>source code</a> and use it in your
        projects.
      </p>
    </div>
  );
}
