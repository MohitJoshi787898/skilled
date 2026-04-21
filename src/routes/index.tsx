import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkills } from "#/lib/dummy-skills";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>
					<p>
						A high-proformance registry for procedural agent skills. Discover
						,publish, and operate reusable agent capabilities for a route-driven
						workspace.
					</p>
				</div>
				<div className="actions">
					<Link to="skills" className="btn-primary">
						<Terminal size={18} />
						<span>Browse Registry</span>
					</Link>
					<Link to="skills" className="btn-secondary">
						Publish Skills
					</Link>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created
						<span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Explore the latest additions to our registry, showcasing a diverse
					</p>
				</div>
				<div>
					{dummySkills.length > 0 ? (
						<div className="skills-grid">
							{dummySkills.map((skill) => (
								<SkillCard key={skill.id} {...skill} />
							))}
						</div>
					) : (
						<p>No skills found.</p>
					)}
				</div>
			</section>
		</div>
	);
}
