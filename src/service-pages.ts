export const services = [
  {
    slug: 'exterior-painting',
    name: 'Exterior Painting',
    intro: 'Repaint stucco, siding, trim, and doors with a Sacramento crew that can also address surface repairs before painting.',
    sections: [
      ['Stucco, siding, and exterior trim', 'A full repaint is a chance to bring the body, trim, garage doors, and front entry together. Show us any peeling paint, stained areas, or spots exposed to afternoon sun so we can address them in the estimate.'],
      ['Repairs before the repaint', 'Point out cracked stucco or damaged trim at the walkthrough. We can discuss patching, wood repair, and which surfaces need cleaning or primer before the finish goes on.'],
    ],
    projects: ['7141766', '7642675', '7141584'],
    related: ['wood-repair', 'pressure-washing'],
  },
  {
    slug: 'interior-painting',
    name: 'Interior Painting',
    intro: 'Refresh a single room or repaint the inside of your home, including walls, ceilings, doors, and trim.',
    sections: [
      ['Where to start', 'Tell us which rooms you want painted and whether you’re keeping the current color. If walls, ceilings, and trim need different finishes, we can walk through those choices room by room.'],
      ['Getting the rooms ready', 'Flag nail holes, damaged drywall, wallpaper, or trim that needs attention when you ask for an estimate. Let us know which rooms you’ll need to use during the job so we can talk through access and the order of work.'],
    ],
    projects: ['7141150', '7160916', '7141763'],
    related: ['cabinet-painting', 'drywall-repair', 'wallpaper-removal'],
  },
  {
    slug: 'cabinet-painting',
    name: 'Cabinet Painting',
    intro: 'Update the color and finish of your existing kitchen, bathroom, or built-in cabinets.',
    sections: [
      ['Start with the cabinets you have', 'At the estimate, show us the doors, drawer fronts, and cabinet boxes. Let us know if the existing finish is chipped or peeling, or if you’re planning to move or replace hardware.'],
      ['Plan around the kitchen', 'We can discuss the look you want, which cabinet surfaces are included, and what access you’ll need while the work is underway. Bring a color sample or inspiration photo if you have one.'],
    ],
    projects: ['7485000'],
    related: ['interior-painting', 'wood-staining'],
  },
  {
    slug: 'commercial-painting',
    name: 'Commercial Painting',
    intro: 'Interior and exterior painting for commercial properties in Greater Sacramento.',
    sections: [
      ['Painting occupied spaces', 'When requesting a proposal, let us know your operating hours, which areas need to stay accessible, and any site rules the crew should plan around. That helps define the work areas and the order of the job.'],
      ['School and facility projects', 'B&S painted the gym interior at St. Francis High School in Sacramento. If you’re planning a similar project, share the surfaces you need painted and any dates the facility must be ready for use.'],
    ],
    projects: ['7142696', '7528428', '7528426'],
    related: ['multifamily-painting', 'exterior-painting'],
  },
  {
    slug: 'multifamily-painting',
    name: 'Multifamily Painting',
    intro: 'Painting for apartment communities and multifamily properties, with estimates that account for resident access.',
    sections: [
      ['Define the scope by building', 'Tell us which buildings need attention and whether the work includes siding, trim, common areas, or individual units. For exterior work, flag any balconies or walkways that need special access planning.'],
      ['Plan around residents', 'Share your preferred schedule, access restrictions, and resident notification process with us. If you manage several buildings, we can talk through how to sequence the work.'],
    ],
    projects: ['7371162'],
    related: ['commercial-painting', 'exterior-painting'],
  },
  {
    slug: 'pressure-washing',
    name: 'Pressure Washing',
    intro: 'Clean exterior surfaces as part of preparing your property for painting or maintenance.',
    sections: [
      ['Cleaning before exterior painting', 'Tell us which surfaces need washing and where you’re seeing dirt, buildup, or loose paint. The condition of the surface helps determine what needs cleaning and what needs separate prep or repairs.'],
      ['What to show at the estimate', 'Point out damaged areas, loose trim, or places where water could get behind the surface. If you’re also planning to paint or stain, we can discuss which parts to wash first.'],
    ],
    projects: [],
    related: ['exterior-painting', 'alx-deck-maintenance'],
  },
  {
    slug: 'alx-deck-maintenance',
    name: 'ALX Deck Maintenance',
    intro: 'Maintenance for existing ALX deck coating systems on Sacramento-area properties.',
    sections: [
      ['Start with the existing coating', 'If you know when the deck coating was installed or last serviced, share that at the estimate. Photos of worn spots, peeling areas, and edges help show where to focus the walkthrough.'],
      ['Review the deck and its use', 'Let us know how the deck is used and if you’ve seen pooling water or changes to the surface. We can discuss the condition of the coating and which areas need attention.'],
    ],
    projects: [],
    related: ['pressure-washing', 'wood-staining'],
  },
  {
    slug: 'wood-staining',
    name: 'Wood Staining',
    intro: 'Refresh the finish on wood surfaces such as front doors, rails, and other painted or stained features.',
    sections: [
      ['The wood and its existing finish', 'Tell us whether the wood is bare, previously stained, or coated. Point out faded areas and worn edges so we can discuss surface preparation and the finish you want.'],
      ['Choosing how much grain to show', 'Bring a sample or a photo if you want to match nearby wood. The existing surface and its condition affect how the finished color will look.'],
    ],
    projects: ['7485386', '7774778'],
    related: ['wood-repair', 'exterior-painting'],
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    intro: 'Repair damaged wall areas before painting, including patches that need to blend into an existing finish.',
    sections: [
      ['Show us each affected area', 'Include photos of dents, holes, or damaged sections when requesting an estimate. Tell us whether you want the repaired area painted or plan to repaint the whole wall.'],
      ['Matching the surrounding wall', 'An existing texture or an older paint color can affect how a patch blends. We can assess the wall in person and discuss the prep and painting the repair calls for.'],
    ],
    projects: [],
    related: ['interior-painting', 'wallpaper-removal'],
  },
  {
    slug: 'wallpaper-removal',
    name: 'Wallpaper Removal',
    intro: 'Take down old wallpaper and prepare the wall for a fresh paint finish.',
    sections: [
      ['Take stock of the walls', 'Let us know how many rooms are involved, whether there are multiple layers, and if paper is already lifting at any seams. The condition of the wall beneath the paper can affect the prep required.'],
      ['Prepare for the new finish', 'Once the paper is off, the wall may need adhesive cleanup or patching before paint. If you’re repainting the room, bring your color ideas to the estimate so we can discuss the full scope.'],
    ],
    projects: [],
    related: ['drywall-repair', 'interior-painting'],
  },
  {
    slug: 'custom-painting',
    name: 'Custom Painting',
    intro: 'Plan a custom paint project around the color, surfaces, and details you want to highlight.',
    sections: [
      ['Accent walls and color changes', 'Show us where you want a color change to start and stop. Trim, wall corners, and changes in texture can all affect how a color break looks in the room.'],
      ['Bring a reference', 'A photo, paint sample, or sketch can help us understand the look you want. During the estimate, we can talk through the existing surface and what preparation the finish will need.'],
    ],
    projects: ['7642672', '7371158'],
    related: ['interior-painting', 'cabinet-painting'],
  },
  {
    slug: 'wood-repair',
    name: 'Wood Repair',
    intro: 'Address damaged wood on a painting project before the new finish goes on.',
    sections: [
      ['Inspect damaged areas at the estimate', 'Show us any soft trim, peeling sections, or deteriorated boards you’ve noticed. We can look at the affected wood and explain what needs repair or replacement within the scope of the paint job.'],
      ['Coordinate the repair with painting', 'Ask how repaired sections will be prepared and finished alongside the surrounding surfaces. If you know of an ongoing leak or moisture issue, mention it during the walkthrough.'],
    ],
    projects: [],
    related: ['exterior-painting', 'wood-staining'],
  },
];

export function servicePath(slug: string) {
  return `/services/${slug}/`;
}
