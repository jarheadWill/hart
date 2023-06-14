using Domain;

namespace Data.Repository;

public interface IInventoryRepository
{
    Task<List<Product>> GetProductsAsync();
}