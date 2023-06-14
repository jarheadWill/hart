using Domain;

namespace Data.Repository;

public class InventoryRepository : IInventoryRepository
{
    private readonly List<Product> products = new List<Product>
    {
        new Product { Id = 1, Name = "Chair", Count = 12, Description = "Recliner"},
        new Product { Id = 2, Name = "Sofa", Count = 3, Description = "Outdoor"},
        new Product { Id = 3, Name = "Table", Count = 17, Description = "Dining"},
        new Product { Id = 4, Name = "Bed", Count = 7, Description = "Slay"},
        new Product { Id = 5, Name = "Vanity", Count = 22, Description = "Metal"},
        new Product { Id = 6, Name = "Dresser", Count = 10, Description = "Oak"}
    };

    public async Task<List<Product>> GetProductsAsync()
    {
        return products;
    }

    public async Task<Product> GetProductAsync(int id)
    {
        var products = await GetProductsAsync();
        return products.First(item => item.Id.Equals(id));
    }
}