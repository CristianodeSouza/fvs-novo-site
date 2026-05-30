import React from 'react'
import styles from './HowItWorksSection.module.css'

interface Step {
  number: number
  title: string
  description: string
  icon: React.ReactNode
  color: string
}

export interface HowItWorksProps {
  title: string
  subtitle?: string
  steps: Step[]
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({
  title,
  subtitle,
  steps,
}) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div
                className={styles.iconWrapper}
                style={{ borderColor: `var(--color-${step.color})` }}
              >
                <div className={styles.iconContent}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.number}</span>
              </div>

              <div className={styles.content}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className={styles.connector} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
