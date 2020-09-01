import React, { useState, useLayoutEffect } from 'react';
import useDocumentTitle from '../../hooks/use-document-title';
import Background from '../../components/Background/Background';
import SettingsLabel from '../../components/SettingsLabel/SettingsLabel';
import Highlight from '../../components/Highlight/Highlight';
import generateUsage from './generate-usage';
import EventInfo from './EventInfo/EventInfo';
import classes from './EventsKeycode.styles.less';

export default function EventsKeycode() {
  useDocumentTitle('JavaScript events keycodes');

  const [capturedEvent, setCapturedEvent] = useState(null);
  const handleEventCapture = (event) => {
    event.preventDefault();
    setCapturedEvent(event);
  };

  useLayoutEffect(() => {
    window.addEventListener('keydown', handleEventCapture);
    return () => window.removeEventListener('keydown', handleEventCapture);
  }, []);

  if (!capturedEvent) {
    return (
      <Background className={classes.wrapper}>
        <h1 className={classes.title}>Press any key to get JavaScript event keycode info</h1>
      </Background>
    );
  }

  return (
    <Background className={classes.wrapper}>
      <div className={classes.event}>
        <div className={classes.eventTitle}>{capturedEvent.code}</div>
        <div className={classes.group}>
          <SettingsLabel>Event info</SettingsLabel>
          <div className={classes.info}>
            <EventInfo className={classes.infoItem} title="event.key" value={capturedEvent.key} />
            <EventInfo className={classes.infoItem} title="event.code" value={capturedEvent.code} />
            <EventInfo
              className={classes.infoItem}
              title="event.which"
              value={capturedEvent.which}
              deprecation
            />
          </div>
        </div>

        <div className={classes.group}>
          <SettingsLabel>Modifier keys</SettingsLabel>
          <div className={classes.info}>
            <EventInfo
              className={classes.infoItem}
              title="event.altKey"
              kbd="alt"
              value={capturedEvent.altKey}
            />
            <EventInfo
              className={classes.infoItem}
              title="event.ctrlKey"
              kbd="ctrl"
              value={capturedEvent.ctrlKey}
            />
            <EventInfo
              className={classes.infoItem}
              title="event.metaKey"
              kbd="cmd"
              value={capturedEvent.metaKey}
            />
            <EventInfo
              className={classes.infoItem}
              title="event.shiftKey"
              kbd="shift"
              value={capturedEvent.shiftKey}
            />
          </div>
        </div>

        <div className={classes.group}>
          <SettingsLabel>Usage</SettingsLabel>
          <Highlight>{generateUsage(capturedEvent)}</Highlight>
        </div>
      </div>
    </Background>
  );
}
