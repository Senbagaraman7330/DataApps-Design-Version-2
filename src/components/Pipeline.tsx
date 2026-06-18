import { forwardRef, useImperativeHandle, useRef } from 'react';
import webDesignImg from '../assets/capabilities/Web App Dev.jpg';
import mobileAppDesignImg from '../assets/capabilities/Mobile App Dev.jpg';
import uxUiDesignImg from '../assets/capabilities/UXUI Design.jpg';
import devopsCloudImg from '../assets/capabilities/devops_and_cloud_computing.jpg';
import aiAnalyticsImg from '../assets/capabilities/AI & Analytics.jpg';
import staffingSolutionsImg from '../assets/capabilities/Staffing Solutions.jpg';
import qualityAssuranceImg from '../assets/capabilities/assurance_and_testing.jpg';
import digitalConsultingImg from '../assets/capabilities/Digital Consulting.jpg';
import TextInertia from './TextInertia';


export interface PipelineRef {
  update: (progress: number) => void;
}

const Pipeline = forwardRef<PipelineRef, {}>((_, ref) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  useImperativeHandle(ref, () => ({
    update(p: number) {
      const track = trackRef.current;
      if (!track) return;

      const max = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(${-Math.max(0, Math.min(1, p)) * max}px)`;

      barsRef.current.forEach((bar, i) => {
        if (!bar) return;
        const seg = Math.max(0, Math.min(1, p * 8 - i));
        bar.style.transform = `scaleX(${seg})`;
      });
    }
  }));

  const services = [
    {

      title: 'Web App Dev',
      desc: 'We craft scalable, secure, and fully customizable web applications aligned with your business goals.',
      image: webDesignImg
    },
    {

      title: 'Mobile App Dev',
      desc: 'We design intuitive, reliable mobile applications that elevate how users interact with your business.',
      image: mobileAppDesignImg
    },
    {

      title: 'UX/UI Design',
      desc: 'We create visually compelling and functionally seamless digital interfaces that maximize user engagement and brand perception.',
      image: uxUiDesignImg
    },
    {

      title: 'DevOps & Cloud',
      desc: 'We streamline your software lifecycle with modern DevOps practices and cloud-native tools.',
      image: devopsCloudImg
    },
    {

      title: 'AI & Analytics',
      desc: 'We implement custom machine learning pipelines, predictive engines, and real-time visualization dashboards.',
      image: aiAnalyticsImg
    },
    {

      title: 'Staffing Solutions',
      desc: 'We scale your existing technical resources with top-tier developers and dedicated engineering squads.',
      image: staffingSolutionsImg
    },
    {

      title: 'Quality Assurance',
      desc: 'We ensure bulletproof software stability and reliability through manual validation and automated regressions.',
      image: qualityAssuranceImg
    },
    {

      title: 'Digital Consulting',
      desc: 'We audit, plan, and guide your digital transformations to align with high-yield technology opportunities.',
      image: digitalConsultingImg
    }
  ];

  return (
    <section
      id="reveal"
      className="pin"
      data-idx="Services"
      data-fluid='{"CURL":22,"SPLAT_FORCE":4200,"BLOOM_INTENSITY":1.0,"DENSITY_DISSIPATION":0.72,"palette":"ink"}'
      style={{ height: '520vh' }}
    >
      <div className="pinStick">
        <div id="pipeHead">
          <div className="wrap">
            {/* <div className="eyebrow">Our capabilities — 8 services for your growth</div> */}
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-[#102B72] leading-[1.05] mt-4">
              Core <span className="bg-gradient-to-r from-[#102B72] via-[#0f75bc] to-[#35b0a2] bg-clip-text text-transparent">Capabilities.</span>
            </h2>
          </div>
        </div>
        <div id="pipeTrack" ref={trackRef}>
          {services.map((svc, idx) => (
            <div key={idx} className="pstage">
              <div className="pdiag">
                <img src={svc.image} alt={svc.title} className="pstage-img" loading="lazy" />
              </div>
              <div className="pt">
                {svc.title}
              </div>
              <TextInertia text={svc.desc} className="pd justify-start text-left" />
              <div
                className="pbar"
                ref={(el) => { barsRef.current[idx] = el; }}
                style={{ transform: 'scaleX(0)' }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Pipeline.displayName = 'Pipeline';

export default Pipeline;
