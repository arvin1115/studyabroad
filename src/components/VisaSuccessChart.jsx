// src/components/VisaSuccessBarChart.jsx
import React, { useState, useRef, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from 'recharts';

// Visa success data
const rawData = [
  { country: 'UK', ratio: 100 },
  { country: 'USA', ratio: 95 },
  { country: 'Australia', ratio: 90 },
  { country: 'Canada', ratio: 92 },
  { country: 'France', ratio: 90 },
  { country: 'Malta', ratio: 88 },
  { country: 'Poland', ratio: 85 },
  { country: 'Hungary', ratio: 80 },
  { country: 'Dubai', ratio: 99 },
];

// Color mapping per country
const colors = {
  UK: '#FF7F0E',
  USA: '#D62728',
  Australia: '#1F77B4',
  Canada: '#2CA02C',
  France: '#9467BD',
  Malta: '#8C564B',
  Poland: '#E377C2',
  Hungary: '#17BECF',
  Dubai: '#BCBD22',
};

const VisaSuccessBarChart = () => {
  const [inView, setInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  // Sort data ascending
  const data = React.useMemo(
    () => [...rawData].sort((a, b) => a.ratio - b.ratio),
    []
  );

  // Detect mobile vs. desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animate on every scroll into view
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.3 }
    );
    const currentRef = containerRef.current;
    if (currentRef) obs.observe(currentRef);
    return () => {
      if (currentRef) obs.unobserve(currentRef);
    };
  }, []);

  // Label style for contrast
  const labelStyle = {
    fill: '#fff',
    fontSize: isMobile ? 10 : 12,
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Visa Success <span className="text-blue-500">Ratio</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We have a very good visa success rate due to our professional commitment to our students.
        </p>
        <div
          ref={containerRef}
          className="w-full h-64 sm:h-80 md:h-96 overflow-visible"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 30,
                right: 30,
                left: 0,
                bottom: isMobile ? 40 : 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />

              {/* X-axis: desktop shows country names; mobile shows percentages */}
              {isMobile ? (
                <XAxis
                  dataKey="country"
                  tickFormatter={(_, i) => `${data[i].ratio}%`}
                  tick={{ fill: '#011E3D', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  interval={0}
                />
              ) : (
                <XAxis
                  dataKey="country"
                  tick={{ fill: '#333', fontSize: 12 }}
                />
              )}

              <YAxis
                domain={[0, 'dataMax']}
                tickFormatter={(v) => `${v}%`}
                tick={{ fill: '#333', fontSize: 12 }}
              />

              <Tooltip formatter={(val) => `${val}%`} />

              <Bar
                dataKey="ratio"
                isAnimationActive={inView}
                animationDuration={1500}
                barSize={isMobile ? 20 : 30}
              >
                {data.map((entry, idx) => (
                  <Cell key={idx} fill={colors[entry.country]} />
                ))}

                {/* Desktop: percentage labels inside */}
                {!isMobile && (
                  <LabelList
                    dataKey="ratio"
                    position="inside"
                    formatter={(val) => `${val}%`}
                    style={labelStyle}
                  />
                )}

                {/* Mobile: vertical country name inside */}
                {isMobile && (
                  <LabelList
                    dataKey="country"
                    position="insideMiddle"
                    angle={90}
                    style={labelStyle}
                  />
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default VisaSuccessBarChart;
