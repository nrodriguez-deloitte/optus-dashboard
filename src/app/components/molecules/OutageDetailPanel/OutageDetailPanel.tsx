import React from "react";

import "./OutageDetailPanel.styles.scss";
import { OutageDetailPanelProps } from "./OutageDetailPanel.types";

const OutageDetailPanel: React.FC<OutageDetailPanelProps> = ({
  incidentId = "",
  open = false,
  onClose,
}) => {
  return (
    <>
      <div
        className={`outageDetailPanel-overlay${open ? " outageDetailPanel-overlay--visible" : ""}`}
        aria-hidden="true"
        style={{ pointerEvents: open ? "auto" : "none" }}
        onClick={open ? onClose : undefined}
      />

      <aside
        className={`outageDetailPanel${open ? " outageDetailPanel--open" : " outageDetailPanel--closed"}`}
        aria-label="Outage details"
        tabIndex={open ? 0 : -1}
      >
        <button
          className="outageDetailPanel__close"
          aria-label="Close details panel"
          onClick={onClose}
        >
          <span className="outageDetailPanel__closeIcon" aria-hidden="true" />
        </button>
        <header className="outageDetailPanel__header">
          <h2 className="outageDetailPanel__title">Outage {incidentId}</h2>
          <span className="outageDetailPanel__updated" aria-live="polite">
            Last updated 17:52
          </span>
        </header>
        <div className="outageDetailPanel__actions">
          <button
            className="outageDetailPanel__button outageDetailPanel__button--primary"
            aria-label="View communication records"
          >
            <span className="outageDetailPanel__buttonIcon" aria-hidden="true" />
            <span className="outageDetailPanel__buttonText">View comms records</span>
          </button>
          <button
            className="outageDetailPanel__button outageDetailPanel__button--secondary"
            aria-label="Open in Jira"
          >
            <span className="outageDetailPanel__buttonIcon" aria-hidden="true" />
            <span className="outageDetailPanel__buttonText">Open in Jira</span>
          </button>
        </div>
        <section className="outageDetailPanel__card" aria-label="Outage summary">
          <div className="outageDetailPanel__cardContent">
            <div className="outageDetailPanel__cardHeader">
              <h3 className="outageDetailPanel__cardTitle">Fibre Disruption</h3>
              <div className="outageDetailPanel__badges">
                <span className="outageDetailPanel__badge outageDetailPanel__badge--major">
                  Major
                </span>
                <span className="outageDetailPanel__badge outageDetailPanel__badge--stage">
                  Stage 2
                </span>
                <span className="outageDetailPanel__badge outageDetailPanel__badge--location">
                  <span className="outageDetailPanel__badgeIcon" aria-hidden="true" />
                  Parramatta, NSW
                </span>
              </div>
            </div>
            <div className="outageDetailPanel__cardMeta">
              <span className="outageDetailPanel__metaId">IM1830485</span>
              <span className="outageDetailPanel__metaAffected">120,000 services affected</span>
            </div>
            <div className="outageDetailPanel__cardDesc">
              <p>
                Multiple SIP KPI rate increased and observed 17K VOLTE calls failures (17% from
                3.5%) traversing towards Rochedale vSBG, NAT
              </p>
              <p>
                Trunk configuration between cisco switch rdl4cr2.nx and mobile core PE’s got
                modified during change C301384
              </p>
            </div>
          </div>
        </section>

        <section className="outageDetailPanel__timeline" aria-label="Outage timeline">
          <div className="outageDetailPanel__timelineHeader">
            <h3 className="outageDetailPanel__timelineTitle">Outage timeline</h3>
            <span className="outageDetailPanel__timelineUpdated">Identified 6 hours ago</span>
          </div>
          <ol className="outageDetailPanel__timelineList">
            <li className="outageDetailPanel__timelineItem">
              <div
                className="outageDetailPanel__timelineIcon outageDetailPanel__timelineIcon--success"
                aria-hidden="true"
              />
              <div className="outageDetailPanel__timelineContent">
                <div className="outageDetailPanel__timelineRow">
                  <span className="outageDetailPanel__timelineLabel">Outage identified</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--significant">
                    Significant
                  </span>
                </div>
                <div className="outageDetailPanel__timelineMeta">
                  <span className="outageDetailPanel__timelineDate">19:00 01/02/2025</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--stage">
                    Stage 1
                  </span>
                  <span className="outageDetailPanel__timelineAffected">90,000 consumers</span>
                </div>
              </div>
            </li>
            <li className="outageDetailPanel__timelineItem">
              <div
                className="outageDetailPanel__timelineIcon outageDetailPanel__timelineIcon--success"
                aria-hidden="true"
              />
              <div className="outageDetailPanel__timelineContent">
                <div className="outageDetailPanel__timelineRow">
                  <span className="outageDetailPanel__timelineLabel">Outage update issued</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--major">
                    Major
                  </span>
                </div>
                <div className="outageDetailPanel__timelineMeta">
                  <span className="outageDetailPanel__timelineDate">19:00 01/02/2025</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--stage">
                    Stage 2
                  </span>
                  <span className="outageDetailPanel__timelineAffected">120,000 affected</span>
                </div>
              </div>
            </li>
            <li className="outageDetailPanel__timelineItem">
              <div
                className="outageDetailPanel__timelineIcon outageDetailPanel__timelineIcon--success"
                aria-hidden="true"
              />
              <div className="outageDetailPanel__timelineContent">
                <div className="outageDetailPanel__timelineRow">
                  <span className="outageDetailPanel__timelineLabel">Awaiting next update</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--major">
                    Major
                  </span>
                </div>
                <div className="outageDetailPanel__timelineMeta">
                  <span className="outageDetailPanel__timelineDate">19:00 01/02/2025</span>
                  <span className="outageDetailPanel__timelineBadge outageDetailPanel__timelineBadge--stage">
                    Stage 2
                  </span>
                  <span className="outageDetailPanel__timelineAffected">120,000 affected</span>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </aside>
    </>
  );
};

export default OutageDetailPanel;
