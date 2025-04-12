

import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "@/components/waitlist-dialog";
import { Tailwind } from "@react-email/components";

// app/updates/schema-viewer/page.tsx
export default function SchemaViewerUpdate(props: { isEmail?: boolean }) {
  const { isEmail = false } = props;
  return (
    <>
      <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-4">
            🚀 New in FastBase: Table Schema Viewer
          </h1>

          <p className="text-lg mb-6">
            We've shipped one of our most requested features — a smooth, visual
            way to inspect your PostgreSQL table schemas.
          </p>

          <div className="aspect-video rounded-xl overflow-hidden mb-6">
            <iframe
              src="https://www.youtube.com/embed/idOT0D3NafU"
              title="Schema Viewer Demo"
              className="w-full h-full "
            ></iframe>
          </div>

          <h2 className="text-xl font-semibold mb-2">🔍 What's New</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>📄 View complete table schema with types</li>
            <li>🔗 Visualize foreign key relationships</li>
            <li>↕️ Sort columns by name or type</li>
            <li>🌒 Dark mode support</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">🛣️ Coming Soon</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            <li>📝 Inline table editing</li>
            <li>📤 Export schema to SQL</li>
          </ul>

          <p className="text-lg mb-6">
            FastBase is still in early access — join the waitlist to be among
            the first to try it!
          </p>

          {!isEmail ? (
            <WaitlistDialog>
              <Button>Join the Waitlist</Button>
            </WaitlistDialog>
          ) : (
            <a href="https://fastbase.in">Join the Waitlist</a>
          )}
        </div>
      </main>
    </>
  );
}