export interface CaseStudy {
  title: string;
  description: string;
  tech: string[];
  details: {
    context: string;
    challenge: string;
    approach: string[];
    results: string[];
    learnings: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Scaling Engineering at Mediafly',
    description: 'Led teams delivering strategic projects contributing $4M ARR while building the company\'s first nearshore engineering team and improving delivery predictability by 90%.',
    tech: ['Node.js', 'Express', 'Redis', 'React', 'Python', 'AWS', 'Scrum', 'Kanban'],
    details: {
      context: 'Mediafly is a revenue enablement platform serving Fortune 500 clients including Nestlé, ADP, Intuit, and NVIDIA. As Director of Engineering (2022-2024), I led a team of 10 engineers during a critical growth phase.',
      challenge: 'The company needed to deliver strategic customer projects while improving internal processes, reducing technical debt, and scaling the engineering organization. We were resource-constrained and couldn\'t simply throw more people at problems.',
      approach: [
        'Doubled development capacity by initiating and managing the company\'s first nearshore engineering team within a $400k budget',
        'Implemented robust Agile framework (Scrum, Kanban) with structured workflows and continuous feedback loops',
        'Created comprehensive onboarding program reducing ramp-up time by 50%',
        'Reduced external API dependency by 50% by engineering new integration framework using Node.js, Express, and Redis',
        'Led initiative to integrate LLM capabilities to assist engineers with internal codebase'
      ],
      results: [
        '$4M ARR: Sustained annual recurring revenue from strategic projects',
        '90% improvement: In delivery timeline predictability',
        '20% increase: In customer satisfaction scores',
        '50% reduction: In engineering onboarding time',
        '2x capacity: Through nearshore team while maintaining quality'
      ],
      learnings: [
        'Scaling teams is about processes and culture, not just headcount',
        'Strategic technical debt management accelerates delivery over time',
        'Cross-functional alignment multiplies engineering impact'
      ]
    }
  },
  {
    title: '60% Performance Improvement at InsightSquared',
    description: 'Architected ETL system redesign that enabled 500% customer growth by increasing data processing efficiency 60% while handling 40% more volume.',
    tech: ['Python', 'ETL', 'ElasticSearch', 'PostgreSQL', 'Redis', 'AWS'],
    details: {
      context: 'InsightSquared (later acquired by Mediafly) was a revenue intelligence platform serving B2B sales organizations. As Principal Engineer (2019-2021), I led technical architecture for our data platform.',
      challenge: 'Our ETL system was reaching scaling limits. We needed to handle 40% more data volume to support 500% customer growth, but we couldn\'t proportionally increase infrastructure costs. The existing architecture was showing strain—long processing times, resource bottlenecks, and increasing operational complexity.',
      approach: [
        'Analyzed data flow patterns to identify bottlenecks in the ETL pipeline',
        'Redesigned data workflows to optimize for parallelization and reduce redundant processing',
        'Implemented caching strategies and incremental data processing',
        'Built scalable data pipeline using modern ETL patterns and ElasticSearch for analytics',
        'Designed for horizontal scalability—each component could scale independently',
        'Implemented monitoring and alerting for proactive issue detection',
        'Mentored team of 6 engineers on performance optimization techniques'
      ],
      results: [
        '60% efficiency increase: In data processing capabilities',
        '40% more volume: Handled without additional infrastructure',
        '500% customer growth: Enabled by improved system capacity',
        '30% decrease: In bug reports through code quality initiatives',
        '20% increase: In deployment velocity',
        '25% faster: Project completion times through team mentoring'
      ],
      learnings: [
        'Optimization isn\'t just code—it\'s about rethinking the problem',
        'Horizontal scalability requires upfront architecture investment but pays dividends',
        'Mentoring engineers on performance thinking multiplies impact'
      ]
    }
  },
  {
    title: 'Open-Source Performance Benchmarking at Intel',
    description: 'Built comprehensive benchmarking suite for x86_64 processors, adopted industry-wide. Created internal CPU comparison tool with 90% user return rate.',
    tech: ['Python', 'Bash', 'C', 'C++', 'React', 'Redux', 'Node.js', 'Express'],
    details: {
      context: 'Intel Corporation, Data Center Group. As Performance Engineer (2014-2017), I was responsible for company-wide performance benchmarks for x86_64 processors.',
      challenge: 'Intel needed comprehensive performance testing tools for new processor architectures. The tools had to be repeatable and consistent across different systems, cover multiple performance dimensions (cache, memory, compute, database, etc.), easy to use for engineers who weren\'t performance specialists, and open-source to enable industry-wide adoption.',
      approach: [
        'Developed comprehensive benchmarking harness using Object-Oriented Python and Bash',
        'Created automated test suites covering cache latency (LMbench), memory bandwidth (MLC, STREAM), cryptography throughput (OpenSSL), compression performance (zlib), floating-point operations (LINPACK), compilation speed (Linux kernel build), database throughput (Cassandra, MySQL), and container performance (Docker)',
        'Engineered web application using React and Redux for CPU performance comparison',
        'Built RESTful API using Node.js and Express for legacy SQL database integration',
        'Created comprehensive documentation for internal and external users',
        'Open-sourced tools for x86_64 Linux systems'
      ],
      results: [
        'Company-wide adoption: Open-source benchmarking suite used across all SKU performance teams',
        '2x Intel Division Recognition Awards: For competitive analysis and web app creation',
        '90% user return rate: For CPU comparison application',
        'Company-wide impact: Became standard benchmarking owner for multiple workload types'
      ],
      learnings: [
        'Great tools require both technical excellence and user experience design',
        'Open-sourcing creates impact beyond your immediate team',
        'Documentation is as important as code for adoption'
      ]
    }
  }
];
