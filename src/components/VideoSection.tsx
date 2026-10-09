import BrochureSlideshow from './BrochureSlideshow';

interface VideoSectionProps {
  onEnroll?: () => void;
}

export default function VideoSection({ onEnroll }: VideoSectionProps) {
  return <BrochureSlideshow onEnroll={onEnroll} />;
}

