import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-5xl text-white mb-4">
        <span className="font-bold">404</span> | Oops, page non trouvée 🙃
      </h1>
      <Button className="mt-6 text-lg p-8 font-bold bg-orange-600 rounded hover:bg-orange-500 hover:text-black">
        <a href="/">Retour à la page d&apos;accueil</a>
      </Button>
    </div>
  );
}
