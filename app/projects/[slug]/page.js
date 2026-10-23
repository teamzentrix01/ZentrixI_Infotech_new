'use client';
import { notFound } from 'next/navigation';
import AuxiliumLegal from '@/components/projects/AuxiliumLegal';
import BlueIslandWorks from '@/components/projects/BlueIslandWorks';
import Fitloc from '@/components/projects/Fitloc';
import LineageCorporation from '@/components/projects/LineageCorporation';
import RadiantCraftCreation from '@/components/projects/RadiantCraftCreation';
import SawasheriDirect from '@/components/projects/SawasheriDirect';

const projectComponents = {
  'auxilium-legal': AuxiliumLegal,
  'blue-island-works': BlueIslandWorks,
  'fitloc': Fitloc,
  'lineage-corporation': LineageCorporation,
  'radiant-craft-creation': RadiantCraftCreation,
  'sawasheri-direct': SawasheriDirect,
};

export default function ProjectDetail({ params }) {
  const Component = projectComponents[params.slug];
  if (!Component) {
    notFound();
  }
  return <Component />;
}
